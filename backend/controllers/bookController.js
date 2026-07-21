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
