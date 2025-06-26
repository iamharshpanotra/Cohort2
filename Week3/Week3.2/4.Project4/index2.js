const express = require("express");
const mongoose = require("mongoose");

const app = express();

// function that returns a boolean if the age of the person is more than 14. 
function isOldEnough(age){
    if(age>14){
        return true;
    }else {
        return false;
    }
}


app.get("/ride1", function(req, res){
    if(isOldEnough(req.query.age)){
    res.json({
        msg: "You have successfully taken a ride one!"
    })
    }
    else {
         req.status(411).json({
            msg: "Sorry you are not of age yet."
         })
    }
});

const port = 3000;

app.listen(port, function(){
    console.log("server is running on port ", + port)
});