const express = require("express");
const app = express();

app.use(express.static('/Users/pierre/Desktop/Programmieren_3/Session 2/Game of Life'));

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/name/:name", function(req, res){
    let name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.get("/google", function(req, res){
    res.redirect("http://google.de")
});

app.listen(3000, function () {
     console.log("hallo");
});