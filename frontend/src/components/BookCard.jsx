import "../styles/BookCard.css";

function BookCard({ id ,title, author, category, status ,progress , image , onDelete , onEdit }) {
  return (
    <div className="book-card">

      <div className="book-cover">
        <img 
        src={image || "https://placehold.co/200x300?text=No+Image"}
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

        <div className="book-actions">

    <button className="edit-btn"
    onClick={onEdit}>
        Edit
    </button>

   <button
    className="delete-btn"
    onClick={() => onDelete(id)}
>
    Delete
</button>

</div>
      <button className="borrow-btn">
        Borrow Book
      </button>

    </div>
  );
}

export default BookCard;