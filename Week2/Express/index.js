// Go to KidneyTracker file
// Import the Express library
const express = require("express");

// Create an Express application
const app = express();

// Use middleware to parse JSON bodies in incoming requests
app.use(express.json());

// A mock data store representing users and their kidneys
const users = [
    {
        name: "Modi",
        age: 74,
        kidneys: [
            {
                healthy: false // Initially unhealthy
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
    }
];

// GET route - provides stats about the first user's kidneys
app.get("/", function (req, res) {
    // Get the kidneys of the first user
    const alphaKidneys = users[0].kidneys;

    // Total kidneys
    const numberofKidneys = alphaKidneys.length;
    
    // Count how many are healthy
    let numberofHealthyKidneys = 0;
    for (let i = 0; i < alphaKidneys.length; i++) {
        if (alphaKidneys[i].healthy) {
            numberofHealthyKidneys++;
        }
    }

    // Calculate how many are unhealthy
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;

    // Send the statistics as JSON
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});

// POST route - adds a new kidney (with health status) to the first user
app.post("/", function (req, res) {
    // Log the request body for debugging
    console.log(req.body);

    // Get the isHealthy boolean from the request
    const isHealthy = req.body.isHealthy;

    // Add the new kidney to the first user
    users[0].kidneys.push({ healthy: isHealthy });

    // Send confirmation
    res.json({ msg: "Done!" });
});

// PUT route - marks all kidneys of the first user as healthy
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
});

// DELETE route - removes all unhealthy kidneys if any are found
app.delete("/", function(req, res){
    // Check if there's at least one unhealthy kidney
    if (isThereAnyUnhealthyKidney()) {
        const newKidney = [];
        // Retain only healthy kidneys
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidney.push({ healthy: true });
            }
        }
        // Update the kidney list
        users[0].kidneys = newKidney;
        res.json({ msg: "Done!" });
    } else {
        // No unhealthy kidneys found, return 411 status
        res.status(411).json({
            msg: "You have no bad kidneys."
        });
    }
});

// Helper function to check for unhealthy kidneys in the first user
function isThereAnyUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false; 
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

// Start the server and listen on port 3000
app.listen(3000);
