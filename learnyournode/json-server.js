var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req,res){
	if(req.method == "POST"){
		res.end("ONLY GET ALLOWED")
	}else{
		res.writeHead('200',{'Content-Type':'application/json'})
		var parsedUrl = url.parse(req.url);
		var path = parsedUrl.pathname


		if(path === "/api/parsetime"){
			var date = new Date(parsedUrl.query.split("=")[1])
			var h = date.getHours()
			var m = date.getMinutes()
			var s = date.getSeconds()
			res.end(JSON.stringify({hour:h, minute:m,second:s}))
		}
		if(path === "/api/unixtime"){
			var date = new Date(parsedUrl.query.split("=")[1])
			res.end(JSON.stringify({unixtime:date.getTime()}))
		}else {
			res.end("requested method does not exists")
		}

	}
	

});

server.listen(process.argv[2]);