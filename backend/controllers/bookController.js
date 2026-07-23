import Book from "../models/Book.js";
console.log("bookController.js loaded");
// GET all books
export const getBooks = async (req, res) => {
    try {

        const books = await Book.find();

        res.status(200).json(books);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// CREATE a new book
export const addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// DELETE a book
export const deleteBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

// UPDATE a book
export const updateBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};