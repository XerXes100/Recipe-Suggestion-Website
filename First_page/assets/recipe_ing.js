
var mysql = require('mysql');
// const mysql = require('mysql-await');
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const util = require('util');

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

const query_x = util.promisify(con.query).bind(con);

let ing_ids = Array();

function fetch_ingredients(ar) {
    console.log("Aa raha hai");
    // var ing_ids = Array();
    for (var i=0; i<ar.length; i++) {
        var string1 = ar[i];
        var ingredient_jname = string1.charAt(0).toLowerCase() + string1.slice(1);
        ingredient_jname = ingredient_jname.trim();
        console.log(ingredient_jname);
        var query2 = 'select Ingredient_Id from ingredients where Ingredient_Name = ?';
        var values = [ingredient_jname];

        query_x(query2, values, function (error, results) {
            console.log(results);
            // var resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
            // console.log(resultArray);
            console.log(results[0].Ingredient_Id);
            ing_ids.push(results[0].Ingredient_Id);
            console.log("Push kiya baba");
            console.log(ing_ids);
        });
    }
    // return ing_ids;
}

// print_ids = (ing_ids) => {console.log(ing_ids)};

async function ing_id(ar) {
    // var ing_ids = Array();
    // var variable_temp;
    // variable_temp = await fetch_ingredients(ar, ing_ids);
    // if (variable_temp == true) {
    //     print_ids(variable_temp);
    // }
    // let new_ing_ids = await fetch_ingredients(ar, ing_ids);

    function resolveAfter2Seconds(ar) {
        console.log("Resolveafter2secs called");
        return new Promise(resolve => {
            setTimeout(() => {
                // console.log("Here");
                resolve(fetch_ingredients(ar));
            }, 3000);
        });
    }
    
    // var new_ing_ids;
    async function f1() {
        console.log("f1 called");
        // new_ing_ids = await resolveAfter2Seconds(ar);//var
        await resolveAfter2Seconds(ar);
        console.log("Ing_ids in f1: " + ing_ids);
        // console.log("async:" + new_ing_ids); 
        // return new_ing_ids;
    }
    
    async function f2() {
        await f1();
        // console.log("Ing Ids:" + ing_ids);
        // console.log("Ing Ids:" + new_ing_ids);
        // console.log("ing_ids with join"+ new_ing_ids.join(','));
        // console.log("updated:"+  new_ing_ids);
        
        // var recipe_query = 'select Recipe_Id from relational where Ingre_Id in (' + new_ing_ids.join(',') + ')';
        // var recipe_values = [new_ing_ids];
        // console.log(recipe_query);
        // con.query(recipe_query,recipe_values, function(error,results){
        //     console.log("Results: " + results);
        // });
        console.log("Ing Ids:" + ing_ids);
        console.log("ing_ids with join"+ing_ids.join(','));
        console.log("updated:"+  ing_ids);
        
        var recipe_query = 'select Recipe_Id from relational where Ingre_Id in (' + ing_ids.join(',') + ')';
        var recipe_values = [ing_ids];
        console.log(recipe_query);
        con.query(recipe_query,recipe_values, function(error,results){
            console.log("Results: " + results);
        });
        console.log("Andar hai");
    };

    f2();
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