const express = require("express");
const mongoose = require("mongoose");

const app = express();

function ticketChecker(req, res, next){
    const ticket = req.query.ticket;
    if(ticket == "free"){
        next();
    } else{
        res.status(403).send("Access Denied");
    }
}

app.use(ticketChecker);

app.get("/ride1", function(){
    res.send("You rode the first ride!")
});

app.get("/ride2", function(){
    res.send("You rode the first ride!")
});

app.get("/ride3", function(){
    res.send("You rode the first ride!")
});

const port = 3000;
app.listen(port, function(){
    console.log("Server is on the port " + port)
});