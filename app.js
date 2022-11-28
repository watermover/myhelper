const express = require("express");
const fs = require("fs")
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", function(request, response){
    response.sendFile(__dirname+"/index.html");
})
app.get("/public/bundle.js", function(request, response){
    response.sendFile(__dirname+"/public/bundle.js")
})
app.listen(3000, ()=>"Server started")