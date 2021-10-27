
const express = require('express');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const path=require('path');
const app = express();
var validator = require("email-validator");
// app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "../First_page/assets")));
// app.use("../assets", express.static("../assets"));
// app.use(express.static(__dirname + '/assets'));
const notifier = require('node-notifier');
// const path=require('path');

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
    res.sendFile(__dirname + "/new_pass.html");
});

app.post("/", encoder, function (req, res) {
    var useremail = req.body.emailid;
    var new_password = req.body.new_password;
    var confirm_password = req.body.confirm_password;
    console.log(new_password);
    console.log(confirm_password);

    if (new_password == confirm_password){
         if(schema.validate(confirm_password) == true){
                let query1 = 'update Users set pass = ? where user_email = ?';
                let values = [new_password, useremail];
                console.log(query1);
                con.query(query1, values, function (error, results) {
                    console.log(results);
                    if (results != undefined) {
                        // let reqPath = path.join(__dirname, '../First_page/index.html');
                        // res.sendFile(reqPath);
                        res.redirect("http://localhost:8000");

                    } else {
                        notifier.notify({
                            title: "Email doesn't exist,create new email",
                            icon:'noti.jpeg',
                            message: 'Try again!'
                        });
                    }
                    // res.redirect("http://localhost:8000");
                    // res.end();
        });
    }
    else{
        notifier.notify({
            title: "Password requires "+schema.validate(confirm_password, { list: true }),
            icon:'noti.jpeg',
            message: 'Try again!'
          });
    }
}
    else{
        notifier.notify({
            title: "Passwords don't match",
            icon:'noti.jpeg',
            message: 'Try again!'
          });
    }
});

// app.get("/reset_success", function (req, res) {
//     // res.sendFile("C:/Users/SANGRITH KRISHNA/Documents/GitHub/WP-Project/Home_Page/home_page.html");
//     let reqPath = path.join(__dirname, '../First_page/index.html');
//     res.sendFile(reqPath);
//     // console.log(dirname);
// });


//set app port
app.listen(5000)