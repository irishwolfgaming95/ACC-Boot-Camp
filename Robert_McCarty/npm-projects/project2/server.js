const express = require('express');
const app = express();

app.get('/', function (req, res) {
 res.send('Welcome to fruit Hompage!');
 });

app.get('/banana', function (req, res) {
 res.send('I’m going​ bananas!');
 });

app.get('/kiwi', function (req, res) {
 res.send('Kiwis are​ great.​ But​ I don’t​ like​ how​ hairy​ they​ are.');
 });

app.get('/strawberry', function (req, res) {
 res.send('Strawberries​ are​ natures perfect fruit.');
 });

app.get("/fruit/:fruit", function (req, res) {
 res.send("So, I take it your favorite fruit is " + req.params.fruit + ".");
 });

app.get("/bankaccount/:name/:number", function (req, res) {
//  res.send(console.log(req.params.number))
   var int = req.params.number;
   var num = +int;

   if(num >= 50){
      res.send('So, ' + req.params.name + ' I see you have $' + num + ' in your bank account. Can you loan me some money?');
   };

   if(num < 50){
      res.send(req.params.name + ' do you like living dangerously on the edge?');
   };
 });

app.listen(3000, function () {
 console.log('local server active!');
    });