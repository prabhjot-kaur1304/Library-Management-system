import "./../styles/Dashboard.css";
import StatCard from "../components/StatCard";
import BookCard from "../components/BookCard";
import books from "../data/books";

function Dashboard() {
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

    <h2>Featured Books</h2>

    <div className="book-grid">

       <div className="book-grid">

    {books.map((book) => (

        <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            status={book.status}
            progress={book.progress}
            image={book.image}
        />

    ))}

</div>

    </div>

</section>
    </div>
    );
}

export default Dashboard;