const express = require("express");

const app = express();


const PORT = 3000;



let numberofRequests = 0;

function calculateRequest(req, res, next){
    numberofRequests++;
    console.log(numberofRequests);
    next();
}

app.use(calculateRequest);
app.use(express.json());

app.post("/health-checkup", calculateRequest, function (req, res){

});

app.get("/health-checkup2", calculateRequest, function (req, res){

});

app.listen(PORT);