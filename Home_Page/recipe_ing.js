
var mysql = require('mysql');
// const mysql = require('mysql-await');
var fs = require('fs');
var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const util = require('util');

const app = express();

app.use(express.static(path.join(__dirname, "../First_page/assets")));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.set('views', __dirname);

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
        // let reqPath1 = path.join(__dirname, './show_recipes.ejs');
        // res.sendFile(reqPath1);
        // res.sendFile(reqPath1, {recipes: results});
        fetch_recipes(res, recipe_ids);
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

function fetch_recipes(res, recipe_ids) {
    // console.log(ar);
    // let query1 = 'select * from users where user_name=? and user_pass=?';
    // let values = [username, password];
    // console.log(query1);
    // con.query(query1, values, function (error, results) {
    //     console.log(results);
    //     if (results.length > 0) {
    //         res.redirect("/recipes");
    //     } else {
    //         res.redirect("/");
    //     }
    //     res.end();
    // });

    let query_recipe = 'select * from Recipes where Recipe_no in (' +  recipe_ids + ')';
    con.query(query_recipe, function(error, results) {
        console.log(results[0].Recipe_Name);
        if (results.length > 0) {
            for (var i=0; i<results.length; i++) {
                console.log(results[i].Recipe_Name);
                console.log(results[i].Step_1);
                console.log(results[i].Step_2);
                console.log(results[i].Step_3);
                console.log(results[i].Step_4);
                console.log(results[i].Step_5);
            }
            let reqPath1 = path.join(__dirname, '../Home_Page/show_recipes.ejs');
            // var myCss = {
            //     style : fs.readFileSync('./First_page/assets/rec.ejs','utf8'),
            // };
            res.render(reqPath1, {
                recipes: results
            });
        }
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

app.get("/show_recipes/:recipe_id/:recipe_name", function (req, res) {

    let ingredient_names = Array();
    let steps = Array();

    // let recipe_attributes = req.params.id;
    // let recipe_id = recipe_attributes.Recipe_Id;

    // var str = JSON.stringify(Array.from(recipe_map.entries()));
    // var map = new Map(JSON.parse(req.params.recipe_map));

    // var fetch_map = req.params.recipe_map;
    // var map = JSON.parse(fetch_map);
    // let values= [map.Recipe_Id];

    let recipe_id = req.params.recipe_id;
    let recipe_name = req.params.recipe_name;
    let values = [recipe_id];
    
    let get_ingredients = 'select Ingre_id from relational where Recipe_id = ?';
    con.query(get_ingredients, values, function(error, results) {
        if (results.length > 0) {
            console.log("Ingredient Ids, show recipes ke andar");
            for (var i=0; i<results.length; i++) {
                console.log(results[i].Ingre_Id);
                let get_names = 'select Ingredient_Name from ingredients where Ingredient_Id = ?';
                con.query(get_names, [results[i].Ingre_Id], function(errors, results_2) {
                    if (results_2 > 0) {
                        for(var t=0; t<results_2.length; t++) {
                            console.log(results_2[t].Ingredient_Name);
                            ingredient_names.push(results_2[t].Ingredient_Name);
                        }
                    }
                });
                let get_steps = 'select Step_1, Step_2, Step_3, Step_4, Step_5 from Recipes where Recipe_No = ?';
                con.query(get_steps, [recipe_id], function(error, results_3) {
                    steps.push(results_3[0].Step_1);
                    steps.push(results_3[0].Step_2);
                    steps.push(results_3[0].Step_3);
                    steps.push(results_3[0].Step_4);
                    steps.push(results_3[0].Step_5);
                });
            }
        }
        // let reqPath1 = path.join(__dirname, '../Home_Page/recipes_individual.ejs');
        // res.render(reqPath1, {
        //     recipe_name: recipe_name,
        //     ingredients: ingredient_names,
        //     steps: steps
        // });
    });
});

app.listen(8080);