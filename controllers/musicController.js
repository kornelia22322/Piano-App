var fs = require("fs");

module.exports = function(app) {
    app.get('/', function(req, res){
      return res.redirect('/public/index.html');
    });
    app.get('/music', function(req,res){
        var fileId = req.query.id;
    	var file = __dirname + "/../resources/" + fileId;
    	fs.exists(file, function(exists){
    		if(exists) {
    			var rstream = fs.createReadStream(file);
    			rstream.pipe(res);
    		}
            else {
    			res.send("Its a 404");
    			res.end();
    		}
	     });
     });

};
