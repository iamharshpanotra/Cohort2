const express = require('express');
const port = 3000;
const app = express();

// Given an express server which has a few end points, 
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404.
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint. 

app.get('/', function(req, res, next){

})

app.get('/user', function(req, res){
    throw new Error("User not found");
    res.status(200).json({name: 'Joyce'});
});

app.post('/user', function(req, res){
    res.status(200).json({msg: 'Created Dummy User'});
});

app.get("/errorCount", function(req, res){
    res.status(200).json({errorCount});
});

// error handling middleware 
app.use(function(err, req, res, next){
res.status(404).send({})
});

app.listen(port, function(){
    console.log("server is on the port", port)
});
