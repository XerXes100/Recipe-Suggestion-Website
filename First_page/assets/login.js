
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app2=express();
const app = express();

app.use(express.static("assets"));
// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));


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

function ing_id(ar) {
    let string = ar[0];
    let ing = string.charAt(0).toUpperCase() + string.slice(1);
    var query3 = 'CONCAT(LOWER(SUBSTRING(Ingredient_Name,1,1)),LOWER(SUBSTRING(Ingredient_Name,2)))';
    var query2 = 'select Ingredient_Id from ingredients where ? = ?';
    let values = [query3, ing];
    con.query(query2, values, function (error, results) {
        console.log(results);
    // if (results.length > 0) {
    //     res.redirect("/welcome");
    // } else {
    //     res.redirect("/");
    // }
    // res.end();
    });
}

function fetch_recipes(ar) {
    console.log(ar);
    let query1 = 'select * from users where user_name=? and user_pass=?';
    let values = [username, password];
    console.log(query1);
    con.query(query1, values, function (error, results) {
        console.log(results);
        if (results.length > 0) {
            res.redirect("/recipes");
        } else {
            res.redirect("/");
        }
        res.end();
    })
}

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
    res.sendFile(__dirname + "/forgot.html");
    // res.sendFile(__dirname + "/email_sent.html");
    // CSS NAHI AA RAHA 
    // let reqPath2 = path.join(__dirname, '../Forgot_pass/forgot.html');
    // res.sendFile(reqPath2);
});

// app.get("/fetch_recipes", function (req, res) {
//     var recipe_string = req.body.ingredient;
//     const arr = recipe_string.split();
//     ing_id(ar);
//     res.sendFile(__dirname + "/temp.html");
// });

app.post("/", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    let query1 = 'select * from users where user_name=? and user_pass=?';
    let values = [username, password];
    console.log(query1);
    con.query(query1, values, function (error, results) {
        console.log(results);
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
        res.end();
    })
});

//when app is success

app.get("/welcome", function (req, res) {
    // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
    let reqPath = path.join(__dirname, '../Home_Page/home_page.html');
    res.sendFile(reqPath);
    // console.log(dirname);
});

app.post("/forgot_pass", encoder, function (req, res) {
    // var useremail = req.bodyuseremail;i
    useremail = req.body.useremail;
    console.log(useremail);
    let query1 = 'select * from users where user_name=?';
    let values = [useremail];
    console.log(query1);
    con.query(query1, values, function (error, results) {
        console.log(results);
        if (results.length > 0) {
            // res.sendFile(__dirname+"/email_sent.html");
            // console.log(__dirname+"/email_sent.html");
            res.redirect("/email_sent");
            var mailOptions = {
                from: 'wpproject1234@gmail.com',
                to: useremail,
                subject: 'Sending Email using Node.js',
                text: 'Please visit the following link to reset your password: \
                        http://localhost:5000'
              };
            
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
            // res.redirect("/forgot-password");
            // res.sendFile(__dirname+"/email_sent.html");
        } else {
            res.redirect("/");
        }
        res.end();
    })
});


//set app port
app.listen(8000)