
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const app = express();

app.use(express.static("assets"));
// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));


const path=require('path');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Varun017",
    database: "wp_project",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/", function (req, res) {
    // res.sendFile("./First_page/index.html");
    res.sendFile(__dirname + "/new_pass.html");
});

app.post("/", encoder, function (req, res) {
    res.redirect("/reset_success");
    var useremail = req.body.emailid;
    var new_password = req.body.new_password;
    var confirm_password = req.body.confirm_password;
    console.log(new_password);
    console.log(confirm_password);
    if (new_password == confirm_password) {
        let query1 = 'update users set user_pass = ? where user_name = ?';
        let values = [new_password, useremail];
        console.log(query1);
        con.query(query1, values, function (error, results) {
            console.log(results);
            // if (results.length > 0) {
                let reqPath = path.join(__dirname, '../First_page/index.html');
                res.sendFile(reqPath);
            // } else {
            //     alert('')
            // }
            res.end();
        });
    }
    else{
        alert("The new password is same as the old password. Enter a new password")
    }
});

app.get("/reset_success", function (req, res) {
    // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
    let reqPath = path.join(__dirname, '../First_page/index.html');
    res.sendFile(reqPath);
    // console.log(dirname);
});


//set app port
app.listen(5000)