var animals = ["avocado","blueberries"];
var vegetables=["asparagus", "basil_leaves","carrot","cauliflower","chives","cilantro","coriander","corn","cucumber","curry_Leaves","eggplant","garlic","ginger","green_Beans","green_Chillies","jalapenos","lemon","lemongrass","lentils", "lettuce","mushroom","onion","parsley","potato","shallots","spinach","tomato","yucca_root","zucchini"];
var spices = ["asafoetida", "black_pepper","chili_powder","chipotle_pepper","clove","cumin","cumin_powder","five_spice_powder","garam_masala","garlic_powder","mango_powder","mustard","onion_powder","paprika"];
var bakery = ["baguette", "brown_bread", "pita_bread"];
var dairy = ["butter", "cheddar_cheese","cream_cheese","egg","egg_white","egg_yolk","fresh_cream","ghee","heavy_cream","mayonnaise","milk","mozerella_cheese","parmesan_cheese","ricotta","Yoghurt" ]
var seeds = ["carom_seeds","coriander_seeds","sesame"];
var dry_fruit = ["cashew"];
var poultry = ["chicken_brest","chicken_legs","chicken_stock","chuck_roast","Ham","prosciuotto","salmon"];
var flour = ["corn_flour","flour","gram_flour","idli_rava","rice_flour","semolina","wheat_flour"];
var nuts = ["ground_nutmeg","nutmeg"];
var nut = ["peanut"];
var oil = ["olive_oil","sesame_oil","veg_oil"];
var herbs = ["tarragon","turmeric"];
var pulses = ["chana_dal","urad_dal"];
var salt = ["salt"];
var miscellaneous=["cocoa_powder","coconut","dosa_batter","enchilada_sauce","eno_salt","guacamole","macroni","maple_syrup","oregano","peanut_butter","pepper_flakes","red_chilli_flakes","sesame_paste","sev","soy_sauce","sriracha","sugar","tofu","tomato_paste","tortilla","tostada_shells","veg_stock","vinegar","wheat_noodles","white_wine","yeast","ziti_pasta","poha"];
var myDiv1 = document.getElementById("fruits");
var myDiv2 = document.getElementById("vegetables");
var myDiv3 = document.getElementById("spices");
var myDiv4 = document.getElementById("bakery");
var myDiv5 = document.getElementById("dairy");
var myDiv6 = document.getElementById("seeds");
var myDiv7 = document.getElementById("dry_fruit");
var myDiv8 = document.getElementById("poultry");
var myDiv9 = document.getElementById("flour");
var myDiv10 = document.getElementById("nuts");
var myDiv11 = document.getElementById("nut");
var myDiv12 = document.getElementById("oil");
var myDiv13 = document.getElementById("herbs");
var myDiv14 = document.getElementById("pulses");
var myDiv15 = document.getElementById("salt");
var myDiv16 = document.getElementById("miscellaneous");
// console.log(vegetables);
// console.log(animals);

for (var i = 0; i < animals.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+animals[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = animals[i];
    checkBox.name = animals[i];
    checkBox.id=animals[i];
    myDiv1.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(animals[i]));
    // myDiv1.appendChild(img);
    // myDiv1.appendChild(checkBox);
    // myDiv1.appendChild(label);
    // label.appendChild(document.createTextNode(animals[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < vegetables.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+vegetables[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = vegetables[i];
    checkBox.name = vegetables[i];
    checkBox.id=vegetables[i];
    myDiv2.appendChild(li);
    // myDiv2.appendChild(img);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(vegetables[i]));
    // myDiv2.appendChild(checkBox);
    // myDiv2.appendChild(label);
    // label.appendChild(document.createTextNode(vegetables[i]));
    // console.log(myDiv2);
}

for (var i = 0; i < spices.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+spices[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = spices[i];
    checkBox.name = spices[i];
    checkBox.id=spices[i];
    myDiv3.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(spices[i]));
    // myDiv3.appendChild(img);
    // myDiv3.appendChild(checkBox);
    // myDiv3.appendChild(label);
    // label.appendChild(document.createTextNode(spices[i]));
    // console.log(myDiv2);
}

for (var i = 0; i < bakery.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+bakery[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = bakery[i];
    checkBox.name = bakery[i];
    checkBox.id=bakery[i];
    myDiv4.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(bakery[i]));
    // myDiv4.appendChild(img);
    // myDiv4.appendChild(checkBox);
    // myDiv4.appendChild(label);
    // label.appendChild(document.createTextNode(bakery[i]));
    // console.log(myDiv2);
}

for (var i = 0; i < dairy.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+dairy[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = dairy[i];
    checkBox.name = dairy[i];
    checkBox.id=dairy[i];
    myDiv5.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(dairy[i]));
    // myDiv5.appendChild(img);
    // myDiv5.appendChild(checkBox);
    // myDiv5.appendChild(label);
    // label.appendChild(document.createTextNode(dairy[i]));
    // console.log(myDiv2);
}

for (var i = 0; i < seeds.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+seeds[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = seeds[i];
    checkBox.name = seeds[i];
    checkBox.id=seeds[i];
    myDiv6.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(seeds[i]));
    // myDiv6.appendChild(img);
    // myDiv6.appendChild(checkBox);
    // myDiv6.appendChild(label);
    // label.appendChild(document.createTextNode(seeds[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < dry_fruit.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+dry_fruit[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = dry_fruit[i];
    checkBox.name = dry_fruit[i];
    checkBox.id=dry_fruit[i];
    myDiv7.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(dry_fruit[i]));
    // myDiv7.appendChild(img);
    // myDiv7.appendChild(checkBox);
    // myDiv7.appendChild(label);
    // label.appendChild(document.createTextNode(dry_fruit[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < poultry.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+poultry[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = poultry[i];
    checkBox.name = poultry[i];
    checkBox.id=poultry[i];
    myDiv8.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(poultry[i]));
    // myDiv8.appendChild(img);
    // myDiv8.appendChild(checkBox);
    // myDiv8.appendChild(label);
    // label.appendChild(document.createTextNode(poultry[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < flour.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+flour[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = flour[i];
    checkBox.name = flour[i];
    checkBox.id=flour[i];
    myDiv9.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(flour[i]));
    // myDiv9.appendChild(img);
    // myDiv9.appendChild(checkBox);
    // myDiv9.appendChild(label);
    // label.appendChild(document.createTextNode(flour[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < nuts.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+nuts[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = nuts[i];
    checkBox.name = nuts[i];
    checkBox.id=nuts[i];
    myDiv10.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(nuts[i]));
    // myDiv10.appendChild(img);
    // myDiv10.appendChild(checkBox);
    // myDiv10.appendChild(label);
    // label.appendChild(document.createTextNode(nuts[i]));
    // console.log(myDiv1);
}


// for (var i = 0; i < nut.length; i++) {
//     var li=document.createElement("li");
//     var img=document.createElement("img");
//     img.src="../Saved_Pictures/"+nut[i]+".png";
//     var checkBox = document.createElement("input");
//     var label = document.createElement("label");
//     checkBox.type = "checkbox";
//     checkBox.value = nut[i];
//     checkBox.name = nut[i];
//     checkBox.id=nut[i];
//     myDiv11.appendChild(li);
//     myDiv11.appendChild(img);
//     myDiv11.appendChild(checkBox);
//     myDiv11.appendChild(label);
//     label.appendChild(document.createTextNode(nut[i]));
//     // console.log(myDiv1);
// }

for (var i = 0; i < oil.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+oil[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = oil[i];
    checkBox.name = oil[i];
    checkBox.id=oil[i];
    myDiv12.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(oil[i]));
    // myDiv12.appendChild(img);
    // myDiv12.appendChild(checkBox);
    // myDiv12.appendChild(label);
    // label.appendChild(document.createTextNode(oil[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < herbs.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+herbs[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = herbs[i];
    checkBox.name = herbs[i];
    checkBox.id=herbs[i];
    myDiv13.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(herbs[i]));
    // myDiv13.appendChild(img);
    // myDiv13.appendChild(checkBox);
    // myDiv13.appendChild(label);
    // label.appendChild(document.createTextNode(herbs[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < pulses.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+pulses[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = pulses[i];
    checkBox.name = pulses[i];
    checkBox.id=pulses[i];
    myDiv14.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(pulses[i]));
    // myDiv14.appendChild(img);
    // myDiv14.appendChild(checkBox);
    // myDiv14.appendChild(label);
    // label.appendChild(document.createTextNode(pulses[i]));
    // console.log(myDiv1);
}

for (var i = 0; i < salt.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+salt[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = salt[i];
    checkBox.name = salt[i];
    checkBox.id=salt[i];
    myDiv15.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(salt[i]));
    // myDiv15.appendChild(img);
    // myDiv15.appendChild(checkBox);
    // myDiv15.appendChild(label);
    // label.appendChild(document.createTextNode(salt[i]));
    // console.log(myDiv1);
}


for (var i = 0; i < miscellaneous.length; i++) {
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="../Saved_Pictures/"+miscellaneous[i]+".png";
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    checkBox.type = "checkbox";
    checkBox.value = miscellaneous[i];
    checkBox.name = miscellaneous[i];
    checkBox.id=miscellaneous[i];
    myDiv16.appendChild(li);
    li.appendChild(img);
    li.appendChild(checkBox);
    li.appendChild(label);
    label.appendChild(document.createTextNode(miscellaneous[i]));
    // myDiv16.appendChild(img);
    // myDiv16.appendChild(checkBox);
    // myDiv16.appendChild(label);
    // label.appendChild(document.createTextNode(miscellaneous[i]));
    // console.log(myDiv1);
}