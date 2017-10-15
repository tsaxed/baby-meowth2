// server
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 5000);

// Our first route
app.get('/', function (req, res) {
  res.send('Hello from Baby Meowth2+ GitHub!');
});

// Listen to port
app.listen(app.get('port'), function () {
  console.log('App is listening on port ' + app.get('port'));
});