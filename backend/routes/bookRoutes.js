const express = require("express");
const router = express.Router();
const getBooks = require("../controllers/bookController");
router.get("/", (req, res) => {
  res.send("Handling book routes, e.g. search for products");
});

module.exports = router;
