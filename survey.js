document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("number").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 9) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}


// JavaScript Document