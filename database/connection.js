var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dhruv123",
  database: 'recipes'
});


con.connect(function(err) {
    // if (err) throw err;
    console.log("Connected!");
    let sql = "SELECT Ingredient_Name FROM ingredients";
    con.query(sql, function (err, result) {
      if (err) throw err;
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            console.log(row.Ingredient_Name);
        });
    //   console.log("Result: " + result);
    });
  });

