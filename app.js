var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 4000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// instruct express to server up static assets
app.use(express.static('public'));

app.listen(port);
console.log("Server is running at => http://localhost:" + port + "/\nCTRL + C to shutdown");

app.get('/', function(req, res) {
  res.render('index');
});
