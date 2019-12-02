var num1= prompt("Enter a number", "");

var num2= prompt("Enter another number", "");

var num3 = prompt("Enter another number again", "");

function firstSentence() {
    var first = +num1;

    var second = +num2;

    var third = +num3;

    var sum = first + second + third;

    return "The sum of all your numbers is " + sum + ".";
 }
 
 document.body.innerHTML = firstSentence();



