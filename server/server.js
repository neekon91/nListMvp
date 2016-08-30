var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;
 
app.listen(port);
console.log("Server is doing big things on port 5000");