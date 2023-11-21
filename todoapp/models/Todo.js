const mongoose = require("mongoose");

// Define a Mongoose schema for the Todo model
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

// Export the Todo model based on the defined schema
module.exports = mongoose.model("Todo", todoSchema);
