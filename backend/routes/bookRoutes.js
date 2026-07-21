
import express from "express";
import { getBooks ,addBook } from "../controllers/bookController.js";

const router = express.Router();

// GET all books
router.get("/", getBooks);
router.post("/", addBook);

export default router;