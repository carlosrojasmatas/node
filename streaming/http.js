 var http = require('http');
 var through = require("through")
 var fs = require('fs');
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
        	function write (buffer) {this.queue(buffer.toString().toUpperCase())}
        	function end() { this.queue(null)}
        	req.pipe(through(write,end)).pipe(res)
        }
        res.end();
    });
 server.listen(process.argv[2]);
