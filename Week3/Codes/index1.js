const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());



app.post("/health-checkup", function (req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    
    // if(!kidneys){
    //     res.json({
    //         msg: "Wrong Inputs"
    //     })
    //     return
    // }else{
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");

    // }


});


// global catches
app.use(function(err, req, res, next){
    errorCount++;
    res.json({
        msg: "Something went wrong",
    })
})

app.listen(port);