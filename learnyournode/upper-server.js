var http = require("http");
var fs = require("fs");
var map = require('through2-map')

var server = http.createServer(function(req,res){
	if(req.method == "POST"){
		req.pipe(map(function(chunk){
			console.log("printing" + chunk);
			return chunk.toString().toUpperCase()
		})).pipe(res)	
	}else{
		console.log("GET received")
	}
	

});

console.log(process.argv[2]);
server.listen(process.argv[2]);