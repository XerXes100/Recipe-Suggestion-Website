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

// app.listen(8000);