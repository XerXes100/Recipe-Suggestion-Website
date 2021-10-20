var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dhruv123",
    database: 'recipes'
});

let fruits = new Map();
con.connect(function (err) {
    // if (err) throw err;
    console.log("Connected!");
    // let sql = "SELECT Ingredient_Name FROM ingredients";
    // con.query(sql, function (err, result) {

    //   if (err) throw err;
    //     Object.keys(result).forEach(function(key) {
    //         var row = result[key];
    //         console.log(row.Ingredient_Name);
    //     });

    // //   console.log("Result: " + result);
    // });
    let sql = "SELECT * FROM ingredients where Type = 'Fruits'";
    con.query(sql, function (err, result) {
        // if (err) {throw err};


        Object.keys(result).forEach(function (key) {
            var row = result[key];
            // console.log(row.Ingredient_Name);
            fruits.set(row.Ingredient_ID, row.Ingredient_Name)
        });
        //   localStorage.setItem("sidenav-fruits", fruits); 
        return fruits;
    });
});

//add eventlistener on fruit button
for (let [key, value] of fruits) {
    console.log(key);
    console.log(value);
    let node = "<li><img src=\"images/${key}.png\"><input type=\"checkbox\" \
    id=\"${value}\" name=\"fruit\" value=\"${value}\">${value}</li>"
    document.getElementById('sidenav-fruits').appendChild(node);

}

