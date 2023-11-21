// Import the Todo model
const Todo = require("../models/Todo");

// Define the route handler for updating a Todo
exports.updateTodo = async (req, res) => {
    try {
        // Extract the id parameter from the request params
        const { id } = req.params;

        // Extract title and description from the request body
        const { title, description } = req.body;

        // Use Mongoose's findByIdAndUpdate method to find and update the Todo by its id
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
            { new: true } // Return the updated document
        );

        // Send a JSON response with a success flag, the updated data, and a success message
        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Successfully",
        });
    } catch (error) {
        // If there is an error, log the error to the console
        console.error(error);

        // Send a JSON response with a failure flag, an error message, and a status code of 500 (Internal Server Error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error",
        });
    }
};
