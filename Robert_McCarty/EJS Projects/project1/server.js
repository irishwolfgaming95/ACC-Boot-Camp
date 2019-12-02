const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.render("home.ejs", {pizza: "peperoni pizza"});
 });

app.get("/about", function (req, res) {
    res.render("about.ejs", {capuccino: "mocha"});
 });

app.get("/contact", function (req, res) {
    res.render("contact.ejs", {fries: "french fries"});
 });

app.listen(3000, function () {
    console.log('local server active!');
    });