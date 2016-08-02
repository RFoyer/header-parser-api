var express = require("express");
var app = express();

app.use("/", function (req, res) {
    var info = {};
    var regex = /\((.*?)\;/;
    info.ip = req.headers["x-forwarded-for"];
    info.lang = req.headers["accept-language"].substr(0, 5);
    info.operatingSystem = regex.exec(req.headers["user-agent"])[1];
    res.send(JSON.stringify(info));
});

app.listen(8080);