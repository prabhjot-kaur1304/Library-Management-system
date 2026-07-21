import "./../styles/Dashboard.css";
import StatCard from "../components/StatCard";
import BookCard from "../components/BookCard";


function Dashboard( { books , setBooks , search , category , setShowModal , setSelectedBook}) {
    const handleDelete = (id) => {

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);

};
const handleEdit = (book) => {

    setSelectedBook(book);

    setShowModal(true);

};

    const filteredBooks = books.filter((book) =>{
         const matchesSearch =
         book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || book.category === category;

  return matchesSearch && matchesCategory;
    });
    return(
        <div className="dashboard">
            <div className="hero">
            <div className="herotext">
                <h1>Welcome Back!</h1>
                <p>Manage your books, students and library
                        activities from one place.</p>

             <button>Explore Library</button>
            </div>
        </div>

        <div className="stats">

    <StatCard
        title="Books"
        value="1250"
        icon="📚"
    />

    <StatCard
        title="Students"
        value="320"
        icon="👨‍🎓"
    />

    <StatCard
        title="Issued"
        value="84"
        icon="📖"
    />

    <StatCard
        title="Wishlist"
        value="56"
        icon="❤️"
    />

</div>

<section className="bookshelf">

   <div className="books-header">

    <h2>Featured Books</h2>

    <button
        className="add-book-btn"
        onClick={() => setShowModal(true)}
    >
        + Add Book
    </button>

</div>

    <div className="book-grid">

       

    {filteredBooks.map((book) => (

        <BookCard
            key={book.id}
              id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            status={book.status}
            progress={book.progress}
            image={book.image}
            onDelete={handleDelete}
            onEdit={() => handleEdit(book)}
        />

    ))}

    </div>

</section>
    </div>
    );
}

export default Dashboard;