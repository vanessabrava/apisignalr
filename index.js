var express = require('express');
var bodyParser  = require('body-parser');
var http = require('http');
var path = require('path'); 
var app = express();

   
   

extensions = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "application/javascript",
    ".png" : "image/png",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg"
};


 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/', express.static('htdocs'));

var port = process.env.PORT || 3000; 
app.listen(3000, function() {
	console.log('');
	
});

