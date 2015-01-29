fUtils = require('./fileUtils.js');
dir = process.argv[2];
ext = process.argv[3];
fUtils(dir,ext,function (err,data){
	if(err) console.log("Error while reading files");
	for(var i = 0 ; i < data.length; i++){
		console.log(data[i]);
	}
});