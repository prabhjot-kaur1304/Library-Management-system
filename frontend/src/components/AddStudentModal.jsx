import { useState } from "react";
import StudentAPI from "../api/studentApi";
import "../styles/AddBookModal.css";

function AddStudentModal({
    students,
    setStudents,
    setShowModal,
    selectedStudent,
    setSelectedStudent
}) {

    const [newStudent, setNewStudent] = useState(
        selectedStudent || {
            name: "",
            rollNo: "",
            department: "CSE",
            email: "",
            phone: "",
            booksIssued: 0
        }
    );

    const handleSave = async () => {

        try {

            if (selectedStudent) {

                await StudentAPI.put(
                    `/students/${selectedStudent._id}`,
                    newStudent
                );

            } else {

                await StudentAPI.post(
                    "/students",
                    newStudent
                );

            }

            const res = await StudentAPI.get("/students");

            setStudents(res.data);

            setSelectedStudent(null);

            setShowModal(false);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>

                    {selectedStudent ? "Edit Student" : "Add Student"}

                </h2>

                <input
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={(e) =>
                        setNewStudent({
                            ...newStudent,
                            name: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Roll Number"
                    value={newStudent.rollNo}
                    onChange={(e) =>
                        setNewStudent({
                            ...newStudent,
                            rollNo: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Department"
                    value={newStudent.department}
                    onChange={(e) =>
                        setNewStudent({
                            ...newStudent,
                            department: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Email"
                    value={newStudent.email}
                    onChange={(e) =>
                        setNewStudent({
                            ...newStudent,
                            email: e.target.value
                        })
                    }
                />

                <input
                    placeholder="Phone"
                    value={newStudent.phone}
                    onChange={(e) =>
                        setNewStudent({
                            ...newStudent,
                            phone: e.target.value
                        })
                    }
                />

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="save-btn"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                </div>

            </div>

        </div>

    );
}

export default AddStudentModal;