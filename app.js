var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var port = process.env.PORT || 33333;

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());     // for parsing application/json
app.use(bodyParser.urlencoded({ // for parsing application/x-www-form-urlencoded
	extended: true
}));

app.get('/', function (request, response) {
	fs.readFile('index.html', function (error, data) {
		response.send(data.toString());		
	});
});

server.listen(port, function() {
    console.log('Server is running at 127.0.0.1:%d', port);    
});