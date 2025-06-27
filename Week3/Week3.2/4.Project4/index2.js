const express = require('express');
const mongoose = require('mongoose');

const app = express();

// function that returns a boolean if the age of the person is more than 14. 
// function isOldEnough(age){
//     if(age>=14){
//         return true;
//     }else {
//         return false;
//     }
// }

// Middlewares

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else {
        res.json({
            msg:"Sorry, you are not of age yet!"
        })
    }
}

// app.get("/ride1", function(req, res){
//     if(isOldEnough(req.query.age)){
//     res.json({
//         msg: "You have successfully taken the ride one!"
//     })
//     }
//     else {
//          res.status(411).json({
//             msg: "Sorry you are not of age yet."
//          })
//     }
// });

// app.get("/ride2", function(req, res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg:"You have successfully taken the ride two!"
//         })        
//     }
//     else{
//         res.status(411).json({
//             msg:"Sorry ,you are too old to ride this."
//         })
//     }
// });


app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg: "You have successfully taken the ride one!"
    })
});

app.get("/ride2", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg:"You have successfully taken the ride two!"
    })        
});


const port = 3000;

app.listen(port, function(){
    console.log("server is running on port ", + port)
});