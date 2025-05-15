// Creating a simple HTTP server using Express
// node default library => no

const express = require('express');  

const app = express();

function sum(n){
    let ans = 0;
    for (let i = 1; i<=n; i++){
        ans = ans + i; 
    }
    return ans;
}

app.get("/", function(req, res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi Nikhil, you're doing great! The sum of first " + n + " numbers is: " + ans);
})
app.listen(3000);