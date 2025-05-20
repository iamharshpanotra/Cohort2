const express = require("express");

const app = express();

const port = 3000;

app.get("/health-checkup", function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "mehra" || password != "amazon"){
        res.status(400).json({"msg": "Something wrong with the inputs"})
        return
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg": "Something wrong with the inputs"})
        return
    }

    res.json({
        msg: "Your kidney is fine!"
    })
});


 
app.listen(port);