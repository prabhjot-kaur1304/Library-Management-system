import { useState } from "react";
import "../styles/AddBookModal.css";

function AddBookModal({ books,
    setBooks,
    setShowModal}) {
    const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "Programming",
    image: "",
    status: "Available",
    progress: 0,
});
const handleAddBook = () => {

    const book = {
        id: Date.now(),
        ...newBook
    };

    setBooks([...books, book]);

    setShowModal(false);
};
    return (
        <div className="modal-overlay">

            <div className="modal">

                <h2>Add New Book</h2>

<input
    type="text"
    placeholder="Book Title"
    value={newBook.title}
    onChange={(e) =>
        setNewBook({ ...newBook, title: e.target.value })
    }
/>

<input
    type="text"
    placeholder="Author"
    value={newBook.author}
    onChange={(e) =>
        setNewBook({ ...newBook, author: e.target.value })
    }
/>

<select
    value={newBook.category}
    onChange={(e) =>
        setNewBook({ ...newBook, category: e.target.value })
    }
>
    <option>Programming</option>
    <option>Self Improvement</option>
    <option>Productivity</option>
</select>

<input
    type="text"
    placeholder="Image URL"
    value={newBook.image}
    onChange={(e) =>
        setNewBook({ ...newBook, image: e.target.value })
    }
/>

<select
    value={newBook.status}
    onChange={(e) =>
        setNewBook({ ...newBook, status: e.target.value })
    }
>
    <option>Available</option>
    <option>Issued</option>
</select>

<input
    type="number"
    placeholder="Progress"
    value={newBook.progress}
    onChange={(e) =>
        setNewBook({ ...newBook, progress: e.target.value })
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
        onClick={handleAddBook}
    >
        Add Book
    </button>

</div>

            </div>

        </div>
    );
}

export default AddBookModal;