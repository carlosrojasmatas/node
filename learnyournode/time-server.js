var net = require("net")
var server = net.createServer(function(socket){

	var strftime=  require("strftime");
	socket.end(strftime('%F %H:%M', new Date()) + "\n");

});

server.listen(process.argv[2]);
