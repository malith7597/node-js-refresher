const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getASingleBook,
  createBook,
  updateBook,
  deleteBook
} = require("../controllers/book-controller");

router.get("/get", getAllBooks);
router.get("/get/:id", getASingleBook);
router.post("/add", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
