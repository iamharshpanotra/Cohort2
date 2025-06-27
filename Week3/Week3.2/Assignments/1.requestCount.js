// Create a Middleware for logging the number of requests on a server. 

// Given an express server which has a few endpoints. Create a global middleware (app.use) which will maintain a count of the number of requests made to the server in the global requestCount variable. 

const express = require('express');
const mongoose = require('mongoose');

const app = express();

let requestCount = 0;

app.use('/', function(req, res, next){
    {
        requestCount = requestCount + 1;
        next();
    }
});

app.get('/user', function(req, res){
    res.status(200).json({msg:"User"});
});

app.post('/user', function(req, res){
    res.status(200).json({msg:"Created Dummy User"});
});

app.get('/requestCount', function(req, res){
    res.status(200).json({ requestCount });
});


const port = 3000;

app.listen(port, function(){
    console.log("server is running on port ", + port)
}); 


module.exports = app;