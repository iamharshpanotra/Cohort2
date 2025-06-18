const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "dikshitsambyal@gmail.com",
        password: "123",
        name: "Dikshit Sambyal",
    },
    {
        username: "slathiaaman@gmail.com",
        password: "123321",
        name: "Aman Slathia",
    },
    {
        username: "nikhilmehra55@gmail.com",
        password: "123321",
        name: "Nikhil Mehra",
    },
];

function userExists(username, password) {
// Logic to return true or false if this user exists in ALL_USERS Array

}

app.post("/signin", function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist in memory",
        });
    }

    var token = jwt.sign({ username: username }, "shar");
    return res.json({
        token,
    });
});

app.get("/users", function (req, res){
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);