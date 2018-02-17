var express = require('express');
var musicController = require('./controllers/musicController');

var app = express();
app.use(express.static('./public'));

musicController(app);
app.listen(3003);
