import { Book } from "../models/Book.model.js";

export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find()
        res.status(200).json(allBooks)
    } catch (error) {
        res.status(404).json({message: "No pudimos encontrar el libro"})
    }
}

export const getBookById = async(req, res) => {
    try {
        const {id} = req.params
        const getBook = await Book.findById(id) 
        res.status(200).json(getBook)
    } catch (error) {
        res.status(404).json({message: "No pudimos encontrar el libro"})
    }
}

