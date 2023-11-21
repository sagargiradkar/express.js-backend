// Import the Todo model
const Todo = require("../models/Todo");

// Define the route handler for fetching all Todo items
exports.getTodo = async (req, res) => {
    try {
        // Fetch all Todo items from the database
        const todos = await Todo.find({});

        // Send a JSON response with a success flag, the fetched data, and a success message
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched",
        });
    } catch (err) {
        // If there is an error, log the error to the console
        console.error(err);

        // Send a JSON response with a failure flag, an error message, and a status code of 500 (Internal Server Error)
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
};

// Define the route handler for fetching a Todo item by its id
exports.getTodoById = async (req, res) => {
    try {
        // Extract the id parameter from the request parameters
        const id = req.params.id;

        // Extract Todo item based on id using Mongoose's findById method
        const todo = await Todo.findById(id);

        // If no data is found for the given id, send a 404 response
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No Data Found for the Given ID",
            });
        }

        // If data for the given id is found, send a JSON response with a success flag, the fetched data, and a success message
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });
    } catch (err) {
        // If there is an error, log the error to the console
        console.error(err);

        // Send a JSON response with a failure flag, an error message, and a status code of 500 (Internal Server Error)
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error",
        });
    }
};
