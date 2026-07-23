import { useEffect, useState } from "react";
import StudentAPI from "../api/studentApi";

function Students() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {

            const res = await StudentAPI.get("/students");

            setStudents(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h1>Students</h1>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Books Issued</th>
                    </tr>

                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student._id}>

                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.department}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.booksIssued}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Students;