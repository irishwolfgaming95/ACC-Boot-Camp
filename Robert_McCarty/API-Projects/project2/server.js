const express = require('express');
const app = express();
const request = require('request');

let bitcoin = "https://api.coindesk.com/v1/bpi/currentprice.json";

app.use(express.static('public'));

app.get("/", function (req, res) {

    res.render("home.ejs");
  });

app.get("/currentprice", function (req, res) {

    request(bitcoin, function(error, response, body){
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);

            let radio = req.query.currency
            
            if (radio == "USD") {
                console.log(parsedData.bpi.USD.rate_float);
                console.log(parsedData.bpi.USD.symbol);

            }if (radio == "GBP") {
                console.log(parsedData.bpi.GBP.rate_float);
                console.log(parsedData.bpi.GBP.symbol);

            }if (radio == "EUR") {
                console.log(parsedData.bpi.EUR.rate_float);
                console.log(parsedData.bpi.EUR.symbol);
            };
            res.render("bitcoinprice.ejs", {parsedData: parsedData, radio: radio});
        };
        
    }); 
});

app.listen(3000, function () {
    console.log('local server active!');
    }); 