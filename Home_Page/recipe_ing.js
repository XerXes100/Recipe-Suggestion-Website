
var mysql = require('mysql');
// const mysql = require('mysql-await');
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const util = require('util');

const app = express();

app.use(express.static(path.join(__dirname, "../First_page/assets")));

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

// const query_x = util.promisify(con.query).bind(con);

var ing_ids = Array();
var recipe_ids = Array();

async function fetch_ingredients(ar) {
    console.log("Aa raha hai");
    var ing_ids = Array();
    for (var i=0; i<ar.length; i++) {
        var string1 = ar[i];
        var ingredient_jname = string1.charAt(0).toLowerCase() + string1.slice(1);
        ingredient_jname = ingredient_jname.trim();
        console.log(ingredient_jname);
        var query2 = 'select Ingredient_Id from ingredients where Ingredient_Name = ?';
        var values = [ingredient_jname];
        // console.log(query2);
        let response = await con.query(query2, values, function (error, results) {//await
            console.log(results);
            // var resultArray = Object.values(JSON.parse(JSON.stringify(rows)));
            // console.log(resultArray);
            console.log(results[0].Ingredient_Id);
            ing_ids.push(results[0].Ingredient_Id);
            console.log("Push kiya baba");
            console.log(ing_ids);
            app.set('ingredient_ids', ing_ids);
        });
        console.log("Response in fetch_ingredients: " + response);
    }
    // return ing_ids;
}

// print_ids = (ing_ids) => {console.log(ing_ids)};

async function fetch_recipe_ids(res, new_ing_ids) {
    // var recipe_ids = Array();
    console.log("Ing Ids:" + new_ing_ids );
    console.log("ing_ids with join"+new_ing_ids.join(','));
    console.log("updated:"+  new_ing_ids);

    var recipe_query = 'select Recipe_Id from relational where Ingre_Id in (' + new_ing_ids.join(',') + ')';
    var recipe_values = [new_ing_ids];
    console.log(recipe_query);
    con.query(recipe_query,recipe_values, function(error,results){
        console.log("Results: " + results);
        for (var i=0; i<results.length; i++) {
            console.log(results[i].Recipe_Id);
            if (!(results[i] in recipe_ids)) {
                recipe_ids.push(results[i].Recipe_Id);
            }
        }
        console.log(recipe_ids);
        let reqPath1 = path.join(__dirname, '../First_page/assets/show_recipes.html');
        // res.sendFile(reqPath1);
        res.sendFile(reqPath1, {recipes: results});
    });
    console.log("Andar hai");
    // return recipe_ids;
}

// let new_ing_ids;
// let recipe_ids;
async function ing_id(ar) {
    // new_ing_ids = fetch_ingredients(ar);//await
    await fetch_ingredients(ar);
    // recipe_ids = fetch_recipe_ids(new_ing_ids);//await
    // console.log(recipe_ids);
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
    });
};

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

app.get("/fetch_recipes", async function(req, res) {
    console.log(ing_ids);
    await fetch_recipe_ids(res, app.settings['ingredient_ids']).then(() => console.log(recipe_ids));
});

app.listen(8080);