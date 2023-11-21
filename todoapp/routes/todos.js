const express = require("express");
const router = express.Router();

// Import controllers
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// Define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);  // Added a forward slash before "updateTodo"
router.delete("/deleteTodo/:id", deleteTodo);  // Changed "put" to "delete" and added a forward slash before "deleteTodo"

module.exports = router;
