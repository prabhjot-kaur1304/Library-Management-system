
import express from "express";
import { getBooks ,addBook , deleteBook , updateBook } from "../controllers/bookController.js";

const router = express.Router();

// GET all books
router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;