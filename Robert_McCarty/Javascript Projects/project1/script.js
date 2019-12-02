var person = prompt("Please enter your name", "");

var drink = prompt("What is your favorite drink?", "");

var snack = prompt("What is your favorite snack?", "");

function myFunction() {
  return "Hello " + person + ", it seems you like to eat " + snack + " and drink " + drink + "!";
}
document.body.innerHTML = myFunction();