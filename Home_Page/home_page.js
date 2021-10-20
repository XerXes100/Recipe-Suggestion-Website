let fruits_fetched = localStorage.getItem("sidenav-fruits"); 
let fruits = fruits_fetched;  

let ingredient_name = row.Ingredient_Name;
let ingredient_id = row.Ingredient_ID;
let node = "<li><img src=\"images/${ingredient_id}.png\"><input type=\"checkbox\" \
id=\"${ingredient_name}\" name=\"fruit\" value=\"${ingredient_name}\">${ingredient_name}</li>"
document.getElementById('sidenav-fruits').appendChild(node);

