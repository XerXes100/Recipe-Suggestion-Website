var animals = ["avocado","bluebeerries"];
var vegetables=["asparagus", "basil leaves","carrot","cauliflower","chives","cilantro","coriander","corn","cucumber","curry Leaves","eggplant","garlic","ginger","green Beans","green Chillies","jalapenos","lemon","lemongrass","lentils", "lettuce","mushroom","onion","parsley","potato","shallots","spinach","tomato","yucca root","zucchini"];
var myDiv1 = document.getElementById("fruits");
var myDiv2= document.getElementById("vegetables");
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
    myDiv1.appendChild(img);
    myDiv1.appendChild(checkBox);
    myDiv1.appendChild(label);
    label.appendChild(document.createTextNode(animals[i]));
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
    checkBox.id=animals[i];
    myDiv2.appendChild(li);
    myDiv2.appendChild(img);
    myDiv2.appendChild(checkBox);
    myDiv2.appendChild(label);
    label.appendChild(document.createTextNode(vegetables[i]));
    // console.log(myDiv2);
}