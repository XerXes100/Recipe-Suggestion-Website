
// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     // password: "MySQLShell@900"
//     password: ""
// });

// con.connect(function(err) {
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         // if (err) throw err;
//         console.log("Database created");
//     });
// });

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQLShell@900',
    database: 'recipes'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        // if (err) throw err;
        console.log("Table created");
    });
});

// conne.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });

// For closing the database connection
// connection.end(function (err) {
//     if (err) {
//         return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
// });