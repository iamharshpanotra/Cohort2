// Importing the Express framework for building APIs and web servers
const express = require("express");

// Importing Mongoose to connect and interact with MongoDB
const mongoose = require("mongoose");

// Creating an Express application instance
const app = express();

// Middleware: Parses incoming JSON requests and makes the data available in req.body
app.use(express.json());

// Connecting to MongoDB Atlas using Mongoose
// The database name is "user_app". If it doesn't exist, MongoDB will create it automatically.
mongoose.connect("mongodb+srv://iamhsp:H98swgy8eHmG0M83@dummy0.ufzwkdc.mongodb.net/user_app");

// Defining a User model (like a structure for a user record)
// This tells Mongoose what fields each user will have in the 'users' collection
const User = mongoose.model('Users', {
    name: String,      // User's name
    email: String,     // User's email (used as username)
    password: String   // User's password (should be hashed in real-world apps)
});

// Defining a POST API route for user signup
// This will run when a client sends a POST request to "/signup"
app.post("/signup", async function(req, res) {
    // Extracting the submitted data from the request body
    const username = req.body.username; // Email (username)
    const password = req.body.password; // Password
    const name = req.body.name;         // Full name

    // Checking if a user with the same email already exists in the database
    const existingUser = await User.findOne({ email: username });

    if (existingUser) {
        // If user already exists, send a response with error status
        // FIX: 'Status' should be lowercase 'status'
        return res.status(409).send("Username already exists"); // 409 = Conflict
    }

    // Creating a new user object based on the submitted data
    const user = new User({
        name: name,
        email: username,
        password: password // WARNING: Storing plain text passwords is insecure
    });

    // Saving the new user into the MongoDB database
    await user.save();

    // Sending a success response back to the client
    res.json({
        msg: "User Created Successfully"
    });
});

// Starting the Express server on port 3000
// Now the server will listen and respond to incoming requests
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
