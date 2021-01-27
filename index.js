var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("hey world");
});

app.get("/data", function (req, res) {
  res.send({ data: { msg: "yo" } });
});

app.listen(process.env.PORT || 3000);

module.exports = app;
