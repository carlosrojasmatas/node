var trumpet = require("trumpet");
var through = require("through");

var write = function(data) {
	this.queue(data.toString().toUpperCase());
}

var end = function() {
	this.queue(null);
}

var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout)

var stream = tr.select(".loud").createStream();
var trh = through(write,end);
stream.pipe(trh).pipe(stream)

