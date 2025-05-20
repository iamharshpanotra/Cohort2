const express = require("express");

const app = express();

const port = 3000;

app.get("/health-checkup", function (req, res, next){
    console.log("Hi, from first!");
    next();
}, function(req, res){
    console.log("Hi from Second!");
    res.send("New here?")
});





app.listen(port);