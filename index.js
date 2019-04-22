/*var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');*/

/*app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.json({hello: 'world'});
});*/


var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productDb',  { useNewUrlParser: true } );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

var products = require('./product_routes.js')(app);

var server = app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});