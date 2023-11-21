// Import the Todo model
const Todo = require("../models/Todo");

// Define the route handler for deleting a Todo
exports.deleteTodo = async (req, res) => {
    try {
        // Extract the id parameter from the request params
        const { id } = req.params;

        // Use Mongoose's findByIdAndDelete method to find and delete the Todo by its id
        const response = await Todo.findByIdAndDelete(id);

        // Send a JSON response with a success flag, the deleted data, and a success message
        res.status(200).json({
            success: true,
            data: response,
            message: "Todo Deleted Successfully",
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
