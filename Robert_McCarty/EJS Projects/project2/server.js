const express = require('express');
const app = express();

app.get("/", function(req, res){
    var messages = [
        {name: "Jim", message: "How are you?"},
        {name: "Jane", message: "How about pasta for dinner?"},
        {name: "Gary", message: "I like my pasta with butter"}
     ];
 
    res.render("messages.ejs", {messages: messages});
 });
 

app.listen(3000, function () {
    console.log('local server active!');
    });