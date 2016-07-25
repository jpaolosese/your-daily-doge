// require express
var express = require('express');
var app = express();


// HTML endpoint
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
*  Server
*/

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
