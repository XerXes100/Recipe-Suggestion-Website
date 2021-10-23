
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