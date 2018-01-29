var express = require('express');
var fs = require("fs");
var app = express();
var multer = require("multer");
var upload = multer({ dest: __dirname + '/uploads/' });


app.get('/filemeta', function(req, res){
	var index = fs.createReadStream(__dirname + '/assets/index.html', 'utf8');
	res.writeHead(200, {"Content-Type":"text/html"});
	index.pipe(res);
});

app.post('/filemeta', upload.single('file'), function(req, res, next){
	console.log(JSON.stringify(req.file));
	res.writeHead(200, {"Content-Type":"text/json"});
	res.end(JSON.stringify({name: req.file.originalname, size: req.file.size + " bytes"}));
});

app.use("/assets", express.static('assets'));

app.listen(process.env.port || 3000);
console.log("Now listening to requests.");