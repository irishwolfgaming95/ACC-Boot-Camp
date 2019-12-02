var readlineSync = require('readline-sync');


spice = ['spicy', 'very spicy', 'so spicy, you will not feel your face'];
index = readlineSync.keyInSelect(spice, 'How spicy would you like your tacos?');
console.log('So, you want your tacos to be ' + spice[index] + '.');

if (!readlineSync.keyInYN('Are you sure about that?')) {
    console.log('Whats the matter? Affraid of the heat?');
    process.exit();
  }else {
    console.log('Ok, we will have your order right out.');
  };