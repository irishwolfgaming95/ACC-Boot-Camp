var person = prompt("Please enter your name", "");

var num1= prompt("enter a number", "");

var num2 = prompt("enter another number", "");

function firstSentence() {
    return "You are going to have a wonderful day " + person + ".";
  }


function secondSentence() {
     var first = +num1;

     var second = +num2;

     var sum = first + second;

      return " By the way the sum of your numbers are " + sum + ".";
  }

  document.body.innerHTML = firstSentence() + secondSentence();
