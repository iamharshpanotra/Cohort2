const express = require("express");
const app = express();

app.use(express.json()); // This is how we parse the body of the request
const users = [
    {
        name: "Modi",
        age: 74,
        kidneys: [
            {
                healthy: false
            }
        ]
    }, 
    {
        name: "Arun",
        age: 67,
        kidneys: [
            {
                healthy: false
            }
    ]
}];


app.get("/", function (req, res) {
    // Write Logic
    const alphaKidneys = users[0].kidneys;

    const numberofKidneys = alphaKidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i = 0; i<alphaKidneys.length; i++){
        if(alphaKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
});

// This is how we create a post request
app.post("/", function (req, res) {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// This is how we create a put request
app.put("/", function (req, res) {
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

// This is how we create a delete request
app.delete("/", function(req, res){
    // Should return a 411
    // only if atleast one unhealthy kidney is present, else return 411
    
    if(isThereAnyUnhealthyKidney()){
        const newKidney = [];
        for(let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidney.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidney;
        res.json({msg: "Done!"});
    }
    else {
        res.status(411).json({
        msg: "You have no bad kidneys."
        });
    }
})

function isThereAnyUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false; 
    for (let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);


// What should happen if they try to delete when there are no kidneys?
// What should happen if they try to make a kidney healthy when all are already healthy?