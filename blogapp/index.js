const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const blog = require("./routes/blog");

// Mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

// Start the server
app.listen(PORT, () => {
  console.log(`App started successfully on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>This is my homepage</h1>");
});
