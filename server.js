// dependencies
var express = require('express');
var app = express();

var controllers = require('./controllers');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// HTML endpoint
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON endpoint
app.get('/api', controllers.api.index);

// server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
