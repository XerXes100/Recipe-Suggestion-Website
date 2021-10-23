
// var mysql = require('mysql');
const mysql = require('mysql-await');
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();

const app = express();

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

async function ing_id(ar) {
    var ing_ids = Array();
    for (var i=0; i<ar.length; i++) {
        var string1 = ar[i];
        var ingredient_jname = string1.charAt(0).toLowerCase() + string1.slice(1);
        ingredient_jname = ingredient_jname.trim();
        console.log(ingredient_jname);
        var query2 = 'select Ingredient_Id from ingredients where Ingredient_Name = ?';
        var values = [ingredient_jname];
        result_id = async () => {
                await con.awaitQuery(query2, values, function (error, results) {
                console.log(results);
                // var resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
                // console.log(resultArray);
                console.log(results[0].Ingredient_Id);
                ing_ids.push(results[0].Ingredient_Id);
                console.log(ing_ids);
            });
        };
        result_id();
    }

    console.log(ing_ids);
    console.log(ing_ids.join(','));
    var recipe_query = 'select Recipe_Id from relational where Ingre_Id in ?';
    var recipe_values = [ing_ids];
    console.log(recipe_query);
    con.query(recipe_query,recipe_values, function(error, results){
        console.log(results);
    });
    // if (results.length > 0) {
    //     res.redirect("/welcome");
    // } else {
    //     res.redirect("/");
    // }
    // res.end();
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

app.post("/", encoder, function (req, res) {
    var recipe_string = req.body.ingredient;
    recipe_string = recipe_string.trim();
    const ar = recipe_string.split(" ");
    console.log("Recipe string");
    console.log(ar);
    ing_id(ar);
    // let reqPath1 = path.join(__dirname, '../temp.html');
    // res.sendFile(reqPath1);
    // res.sendFile(__dirname + "/temp.html");
});

app.listen(8080);