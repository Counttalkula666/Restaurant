// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var table = [
    {
    routeName: "table1",
    name: "table1",
    role: "curry",
    age: 900,
    forcePoints: 2000
    },
    ];
    var waitingList = [
    {
    routeName: "table2",
    name: "Darth Maul",
    role: "soup",
    age: 200,
    forcePoints: 1200
      }
    ]
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));//send the html file
    });
    app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    });
    app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
    });
    // Displays all characters
    app.get("/api/table", function(req, res) {
    return res.json(characters);
    });
    app.get("/api/waitingList", function(req, res) {
    return res.json(characters);
    });
    // // Displays a single character, or returns false
    // app.get("/api/characters/:character", function(req, res) {
    // var chosen = req.params.character;
    // console.log(chosen);
    // for (var i = 0; i < characters.length; i++) {
    // if (chosen === characters[i].routeName) {
    // return res.json(characters[i]);
    // }
    // }
    // return res.json(false);
    // });
    // Create New Characters - takes in JSON input
    app.post("/api/table", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newresivation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later [https://www.regexbuddy.com/regex.html](https://www.regexbuddy.com/regex.html)
    newresivation.routeName = newresivation.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newresivation);
    
    characters.push(newresivation);
    
    res.json(newresivation);
    });
    // Starts the server to begin listening
    // =============================================================
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });