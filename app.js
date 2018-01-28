var express = require('express');
var fs = require("fs");
var app = express();


app.get('/filemeta', function(req, res){
	var index = fs.createReadStream(__dirname + '/assets/index.html', 'utf8');
	res.writeHead(200, {"Content-Type":"text/html"});
	index.pipe(res);
});

app.use("/assets", express.static('assets'));

app.listen(process.env.port || 3000);
console.log("Now listening to requests.");