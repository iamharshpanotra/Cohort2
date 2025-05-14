// use API, HTTP 
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000
// const port = 3000
app.use(express.json()) 

// // Middlewares
// app.use(bodyParser.json());
// const fs = require('fs');
// fs.readFile("a.txt", "utf-8", function(err, data){

// })

app.post("/backend-api/needs", function(req, res){
    const message = req.body.message;
    console.log("Received", message);
    // Machine Learning model
    res.json({
        output: "2 + 2 = 4"
    })
})

// app.get("/route-handler", function(req, res){
//     // headers, body, query parameters
//     // do machine learning model
//     res.json({
//         name: "Nikhil",
//         age: 22
//     })
// })


// app.post("/backend-api/needs", function(req, res){
//     console.log(req.body);
//     res.send({
//         msg: "3 + 4 != 5"
//     })
// })






// app.post("/", function(req, res){
//     res.send('<b>Hello Nikhil</b>')
// })


// app.get('/conversations', function(req, res) {
//     res.send('Hi Dikshit');
// })

app.listen(port, function(){
    console.log(`The app is running on port ${port}`)
});