const express = require('express');
const app = express();
const request = require('request');
const yelp = require('yelp-fusion');
const client = yelp.client('pmV1LGhMhH-npQ1orySEeshbry59y75r3SOdb5ep1uDMc070ygwk3rHThVPUzRWsHn0bQbQGjtU-gVPoiFOzIpaifSxPkJi8QwkqoCa8x0kqDgaAvjOHA2hCBRLKXXYx');

app.get("/", function (req, res) {

   res.render("home.ejs");

 });

 app.get("/searchresults", function (req, res) {

    client.search({
      location: 'austin tx',
    }).then(response => {

      let businesses = response.jsonBody.businesses;

        businesses.forEach((business, index) => {
            if (index <= 9 ) {
              let food = businesses[index].name;
              let review = businesses[index].rating;            
            };
        });

        res.render("searchresults.ejs",{businesses: businesses} );

    }).catch(e => {
      
      console.log(e);
    });
    
 });

app.listen(3000, function () {
    console.log('local server active!');
    });   


// Tn0kqAKMyloYkKcmnPLttg Client ID