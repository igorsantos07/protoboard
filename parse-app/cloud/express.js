var express = require('express');
var app = express();

app.set('views', 'cloud');
app.set('view engine', 'ejs');

app.get('*', function(req, res) {
  res.render('index');
});

app.listen();
