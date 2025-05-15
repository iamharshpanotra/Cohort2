const express = require('express');

function calculateSum(n){
    let ans = 0;
    for (let i = 1; i<=n; i++){
        ans = ans + i; 
    }
    return ans;
}

// This is just syntax - when we are using express, we need to create an instance of express
// and then we can use that instance to create a server
const app = express();

// This is the syntax to create a server
app.get("/", function(req, res){
    // This is how we get the query parameter from the URL
    const n = req.query.n;
    // This is how we call the function. If n is not provided, we will use 10 as default
    const ans = calculateSum(10);
    // This is how we send the response back to the client
    res.send(ans);//
})

// This is how we start the server. The server will listen on port 3000
app.listen(3000);