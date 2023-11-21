// Import required modules
const express = require("express");
const app = express();

// Load configuration from the environment file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for the TODO API
const todoRoutes = require("./routes/todos");

// Mount the TODO API routes under the "/api/v1" path
app.use("/api/v1", todoRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});

// Connect to the database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage body</h1>`);
});
