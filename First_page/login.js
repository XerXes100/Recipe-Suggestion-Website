
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app2=express();
const app = express();
var validator = require("email-validator");
app.use(express.static("assets"));
// var popupS = require('popups');
let alert = require('alert');
// const popup = require('node-popup');
// import alert from 'alert';
const notifier = require('node-notifier');

// const NotificationCenter = require('node-notifier').NotificationCenter;

// var notifier = new NotificationCenter({
//   withFallback: false, // Use Growl Fallback if <= 10.8
//   customPath: undefined // Relative/Absolute path to binary if you want to use your own fork of terminal-notifier
// });

// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));


const path=require('path');

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
// console.log(schema.validate('joke', { list: true }));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sang123",
    database: "the_home_cook",
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

app.get("/forgotpass", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath2 = path.join(__dirname, '../Forgot_pass/forgot.html');
    res.sendFile(reqPath2);
});

app.get("/tofu", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath3 = path.join(__dirname, '../Home_Page/tofu.html');
    res.sendFile(reqPath3);
});

app.get("/dosa", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath4 = path.join(__dirname, '../Home_Page/dosa.html');
    res.sendFile(reqPath4);
});

app.get("/soup", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath5 = path.join(__dirname, '../Home_Page/soup.html');
    res.sendFile(reqPath5);
});

app.get("/pasta", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath6 = path.join(__dirname, '../Home_Page/pasta.html');
    res.sendFile(reqPath6);
});

app.get("/vegan", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath7 = path.join(__dirname, '../Home_Page/vegan.html');
    res.sendFile(reqPath7);
});

app.get("/cbc", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath8 = path.join(__dirname, '../Home_Page/cbc.html');
    res.sendFile(reqPath8);
});

app.get("/aboutus", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath9 = path.join(__dirname, '../About_us/aboutus.html');
    res.sendFile(reqPath9);
});


app.post("/", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    let query1 = 'select * from Users where user_email=? and pass=?';
    let values = [username, password];
    console.log(query1);
    con.query(query1, values, function (error, results) {
        console.log(results);
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
            // alert("Invalid Credentials");
            // window.alert("Invalid Credentials");
            // import {alert} from 'node-popup';
            // alert('Hello World!');
            // popup.alert({
            //         content: "Bol de password bhul gaya"
            //     });
            // alert('Invalid Credentials');
            // new notifier.NotifySend(options).notify();
            // notifier.notify('Message');
            notifier.notify({
                title: 'Invalid credentials',
                icon:'noti.jpeg',
                message: 'Try again!'
              });
            // notifier.notify({
            //     title:'Invalid',
            // })
        }
        res.end();
    })
});

app.post("/signup", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    console.log(validator.validate(username));
    console.log(schema.validate(password));
    if(username.includes("#") || username.includes("&") || username.includes("!") || username.includes("-") || username.includes("*")){
        notifier.notify({
            title: 'Invalid email or password',
            icon:'noti.jpeg',
            message: 'Try again!'
          });
    }
    else{
        if (validator.validate(username) == true && schema.validate(password) == true) {
            con.query("SELECT user_email from Users where user_email = '"+ username +"'", function(err, result, field){
                if(result.length === 0){
                   //new user logic
                   let query3 = 'insert into Users(user_id,user_email,pass) values(6,?,?);';
                    let values = [username, password];
                    console.log("Query: "+ query3);
                    con.query(query3, values, function (error, results) {
                        console.log("Results: " + results);
                        res.redirect("/welcome");
                    })
                } else {
                    notifier.notify({
                        title: 'Invalid credentials',
                        icon:'noti.jpeg',
                        message: 'Try again!'
                      });
                    
                    // popup.alert({
                    //     content: "Bol de password bhul gaya"
                    // // });
                }
            });
        } else {  
            // notifier.notify({
            //     title: 'Password should have the length more than 8 characters',
            //     message: 'Try again!'
            //   });
            // console.log("Andhe email aur password dhyaan se daal.");schema.validate(password, { list: true })
            console.log("else mei hai apan");
            console.log(schema.validate(password, { list: true }))

            notifier.notify({
                title: "Password requires "+schema.validate(password, { list: true }),
                icon:'noti.jpeg',
                message: 'Try again!'
              });
        }
            // console.log(schema.validate(password));
            // console.log(schema.validate(password, { list: true }))
        }

    }
    
);

//when app is success

app.get("/welcome", function (req, res) {
    // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
    let reqPath = path.join(__dirname, '../Home_Page/home_page.html');
    res.sendFile(reqPath);
    // console.log(dirname);
});

app.get("/aboutus", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile("../S");
    let reqPath9 = path.join(__dirname, '../About_us/aboutus.html');
    res.sendFile(reqPath9);
});

//set app port
app.listen(8000)