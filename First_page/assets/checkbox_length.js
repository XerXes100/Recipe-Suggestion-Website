
var mysql = require('mysql');


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

function ing_id(ar) {
  let string = ar[0];
  let ing = string.charAt(0).toUpperCase() + string.slice(1);
  var query3 = 'CONCAT(LOWER(SUBSTRING(Ingredient_Name,1,1)),LOWER(SUBSTRING(Ingredient_Name,2)))';
  var query2 = 'select Ingredient_Id from ingredients where ? = ?';
  let values = [query3, ing];
  con.query(query2, values, function (error, results) {
    console.log(results);
    // if (results.length > 0) {
    //     res.redirect("/welcome");
    // } else {
    //     res.redirect("/");
    // }
    // res.end();
})
}

function fetch_recipes(ar) {
  console.log(ar);
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
}

document.getElementById('select').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let x=new Array();
    for (var checkbox of checkboxes) {
        x.push(checkbox.value);
    }
    // console.log(x);
    if(x.length<=5){
      document.getElementById("n_items").innerHTML=x.length;
      for (let i = 0; i < x.length; i++) {
      let y="<b>"+x[i]+"<br>"
      document.getElementById("items").innerHTML+=" "+y;
      // console.log(x);
      }
      ing_id(x);
    }
    else{
      alert("You can click only 5 Ingredients");
      var element = document.getElementById("select");
      element.onclick = function uncheckAll() {
      var inputs = document.querySelectorAll('input[type="checkbox"]:checked');
      // console.log(inputs);
      for (var i = 0; i < inputs.length; i++) {
          inputs[i].checked = false;
      }
  }
}
      
  }
  
//     $('input[type='checkbox']').click(function(event) {
//       if(this.checked) {
//       $('.invoiceOption').each(function() {
//         this.checked = true;
    
//       });
//       } else {
//       $('.invoiceOption').each(function() {
//         this.checked = false;
  
//       });
//     }
//  });