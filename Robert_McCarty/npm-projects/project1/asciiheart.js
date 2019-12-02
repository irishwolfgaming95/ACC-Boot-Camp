var asciiHeart = require("ascii-heart");
console.log(asciiHeart());


var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');

var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true
  });

  var favDrink = readlineSync.question('What is your favorite drink? ', {
    hideEchoBack: true 
  });
  console.log('Hi, ' + userName + ' your favorite food is ' + favFood + ' and your favorite drink is ' + favDrink + '!');