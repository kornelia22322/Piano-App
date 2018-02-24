var express = require('express');
var musicController = require('./controllers/musicController');
var port = process.env.PORT || 3003;

var app = express();
app.use(express.static('./public'));

musicController(app);
app.listen(port);
