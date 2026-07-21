import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import { useState } from "react";
import booksData from "./data/books";
import AddBookModal from "./components/AddBookModal";

function App()
{
  const[search , setSearch]=useState("");
  const [category, setCategory] = useState("All");
  const [books, setBooks] = useState(booksData);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  return(
    <div className="app">
      <Sidebar />

      <div className="content">
        <Navbar 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory} />

        <Dashboard 
         books={books}
         setBooks={setBooks}
        search={search}
         category={category}
         setShowModal={setShowModal}
         setSelectedBook={setSelectedBook} />
        
       {showModal && (
    <AddBookModal
        books={books}
        setBooks={setBooks}
        setShowModal={setShowModal}
    />
)}
      </div>
    </div>
  );
}

export default App;