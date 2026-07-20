import "../styles/BookCard.css";

function BookCard({ title, author, category, status ,progress , image }) {
  return (
    <div className="book-card">

      <div className="book-cover">
        <img 
        src={image}
        alt={title}
        />
      </div>

      <h3>{title}</h3>

      <p className="author">{author}</p>
      
      <span className="category">{category}</span>

      <div className ={`status ${status.toLowerCase()}`}>
        {status}
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{width: `${progress}%` }}>
        </div>
      </div>
      <p className="progress-text">{progress}% Read</p>

      <button className="borrow-btn">
        Borrow Book
      </button>

    </div>
  );
}

export default BookCard;