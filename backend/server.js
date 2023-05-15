const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("sync code");
  throw new Error("An error occurred");
  res.send("Hello World!");
});
//MongoDB connection
const connectDB = require("./config/db");
connectDB();
app.get("/a", (req, res, next) => {
  // Before a second, execute the code below
  setTimeout(() => {
    try {
      console.log("async code");
    } catch (error) {
      next(error);
    }
  });
});

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
