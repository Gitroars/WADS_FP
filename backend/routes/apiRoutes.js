const express = require("express");
const app = express();
const bookRoutes = require("./bookRoutes");

app.use("/products", bookRoutes);

module.exports = app;
