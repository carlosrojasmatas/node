var concat = require("concat-stream");

process.stdin
	.pipe(concat(function(string){
		console.log(string.toString().split("").reverse().join(""))

	}))