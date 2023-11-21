// Import the mongoose library
const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Define the function for connecting to the database
const dbConnect = () => {
    // Use the connect method of mongoose to connect to the MongoDB database
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    // If the connection is successful, log a success message
    .then(() => console.log("DB ka Connection is Successful"))
    // If there is an error in the connection, log an error message, the error itself, and exit the process
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
}

// Export the dbConnect function to make it available for use in other modules
module.exports = dbConnect;
