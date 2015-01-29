var concat= require("concat-stream");
var http=require("http");


http.get(process.argv[2],function(response){
	response.setEncoding("utf8");
	response.pipe(concat(function(data){
		var rsString = data.toString();
		console.log(rsString.length);
		console.log(rsString);
	}));
	
});