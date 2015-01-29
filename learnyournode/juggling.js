var concat= require("concat-stream");
var http=require("http");

var url1=  process.argv[2];
var url2=  process.argv[3];
var url3=  process.argv[4];

var response1 = "";
var response2= "";
var response3="";

http.get(url1,function(response){
	response.setEncoding("utf8");
	response.pipe(concat(function(data){
		var response1 = data.toString();
		
		http.get(url2,function(response){
		
			response.setEncoding("utf8");
			response.pipe(concat(function(data){
		
				var response2 = data.toString();
				http.get(url3,function(response){
					response.setEncoding("utf8");
					response.pipe(concat(function(data){

						console.log(response1);
						console.log(response2);
						console.log(data.toString());

					}));
				});		
			}));
		
		});

	}));
});



