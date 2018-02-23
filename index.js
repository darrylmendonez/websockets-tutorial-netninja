var express = require('express');

// app setup
var app = express();
var port = 4000;
var server = app.listen(port, function() {
  console.log('listening on port', + port);
});

// static files
app.use(express.static('public'));
