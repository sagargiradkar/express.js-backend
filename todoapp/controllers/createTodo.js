// Import the Todo model
const Todo = require("../models/Todo");

// Define the route handler for creating a new Todo
exports.createTodo = async (req, res) => {
    try {
        // Extract title and description from the request body
        const { title, description } = req.body;

        // Create a new Todo object and insert it into the database using the Todo model
        const response = await Todo.create({ title, description });

        // Send a JSON response with a success flag, the created data, and a success message
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry Created Successfully",
        });
    } catch (error) {
        // If there is an error, log the error to the console
        console.error(error);

        // Send a JSON response with a failure flag, an error message, and a status code of 500 (Internal Server Error)
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: error.message,
        });
    }
};
