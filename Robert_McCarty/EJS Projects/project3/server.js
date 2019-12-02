const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
 });

app.get("/about", function (req, res) {
    res.render("about.ejs");
 });

app.get("/contact", function (req, res) {
    res.render("contact.ejs");
 });

app.listen(3000, function () {
    console.log('local serer active!');
    });