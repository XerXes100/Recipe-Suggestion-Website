
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app2=express();
const app = express();
var validator = require("email-validator");

app.use(express.static("assets"));
// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));


var passwordValidator = require('password-validator');
 
// Create a schema
var schema = new passwordValidator();
 
// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Password', 'Password123']); // Blacklist these values
 
// Validate against a password string
// console.log(schema.validate('validPASS123'));
// // => true
// console.log(schema.validate('invalidPASS'));
// => false
 
// Get a full list of rules which failed
console.log(schema.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]

const path=require('path');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sang123",
    database: "user_info",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/", function (req, res) {
    // res.sendFile("./First_page/index.html");
    res.sendFile(__dirname + "/index.html");
});

app.get("/signup", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath1 = path.join(__dirname, '../Signup/signup.html');
    res.sendFile(reqPath1);
});

app.get("/forgot_pass", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile(__dirname + "/Forgot_pass/forgot.html");
    // res.sendFile(__dirname + "/email_sent.html");
    // CSS NAHI AA RAHA 
    let reqPath2 = path.join(__dirname, '../Forgot_pass/forgot.html');
    res.sendFile(reqPath2);
});

// app.get("/fetch_recipes", function (req, res) {
//     var recipe_string = req.body.ingredient;
//     const arr = recipe_string.split();
//     ing_id(ar);
//     res.sendFile(__dirname + "/temp.html");
// });

app.post("/signup", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    console.log(validator.validate(username));
    console.log(schema.validate(password));
    if (validator.validate("username") == true && schema.validate('password') == true) {
        let query3 = 'insert into users(userid,user_name,user_pass) values(4,?,?);';
        let values = [username, password];
        console.log("Query: "+ query3);
        con.query(query3, values, function (error, results) {
            console.log("Results: " + results);
            res.redirect("/welcome");
        })
    } else {
        alert("Andhe email aur password dhyaan se daal.")
    }
});

//when app is success

app.get("/welcome", function (req, res) {
    // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
    let reqPath = path.join(__dirname, '../Home_Page/home_page.html');
    res.sendFile(reqPath);
    // console.log(dirname);
});



//set app port
app.listen(8000);