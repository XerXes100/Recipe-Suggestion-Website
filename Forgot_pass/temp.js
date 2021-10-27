
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const path=require('path');
const app = express();

// app.use(path.join(__dirname, '../First_page/assets'), express.static("assets"));
app.use(express.static(path.join(__dirname, "../First_page/assets")));
// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));

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

var useremail = '';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wpproject1234@gmail.com',
    pass: 'project@123'
  }
});

app.get("/", function (req, res) {
    // res.sendFile("./First_page/index.html");
    // res.sendFile(__dirname + "/forgot.html");
    // res.sendFile(__dirname + "/email_sent.html");
    // CSS NAHI AA RAHA 
    let reqPath2 = path.join(__dirname, '/forgot.html');
    res.sendFile(reqPath2);
});

app.post("/", encoder, function (req, res) {
    // var useremail = req.bodyuseremail;i
    useremail = req.body.useremail;
    console.log(useremail);
    let query1 = 'select * from Users where user_email=?';
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
                subject: 'Password Reset',
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

app.get("/email_sent", function (req, res) {
    // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
    let reqPath = path.join(__dirname, '/email_sent.html');
    res.sendFile(reqPath);
    // console.log(dirname);
});

//set app port
app.listen(4000)