var through = require("through")
var split = require("split")

var i  = 0 ;
function write (buf) {
	i++;

	if((i%2) == 0 ){
		this.queue(buf.toString().toUpperCase() + "\n");	
	}else {
		this.queue(buf.toString().toLowerCase() + "\n");				
	}

}

function end() {
}

var tr = through(write,end);

process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);

