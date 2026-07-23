import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import API from "./api/bookApi";
import AddBookModal from "./components/AddBookModal";
import { Routes, Route } from "react-router-dom";

import Books from "./pages/Books";
import Students from "./pages/Students";
import IssuedBooks from "./pages/IssuedBooks";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Settings";
import ReturnedBooks from "./pages/ReturnedBooks";
import Analytics from "./pages/Analytics";

function App()
{
  const[search , setSearch]=useState("");
  const [category, setCategory] = useState("All");
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  return(
    <div className="app">
      <Sidebar />

      <div className="content">
        <Navbar 
        search={search}
        setSearch={setSearch}
         />

        <Routes>

    <Route
        path="/"
        element={
            <Dashboard
                books={books}
                setBooks={setBooks}
                search={search}
                category={category}
                setShowModal={setShowModal}
                setSelectedBook={setSelectedBook}
            />
        }
    />

    <Route path="/books" element={<Books />} />

    <Route path="/students" element={<Students />} />

    <Route path="/issued-books" element={<IssuedBooks />} />

    <Route path="/wishlist" element={<Wishlist />} />

    <Route path="/settings" element={<Settings />} />

    <Route path="/returned-books" element={<ReturnedBooks />} />

<Route path="/analytics" element={<Analytics />} />

</Routes>

          {showModal && (
    <AddBookModal
        books={books}
        setBooks={setBooks}
        setShowModal={setShowModal}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
    />
)}
        
      </div>
    </div>
  );
}

export default App;