
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

//set app port
app.listen(8000)