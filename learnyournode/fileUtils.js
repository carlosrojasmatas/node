module.exports = function (dir,ext,callback){
		fs = require("fs");
		path = require("path");
		result = [];
		fs.readdir(dir, function (err,files){
			if(err) return callback(err);
			for (var i = 0; i < files.length; i++) {
				if( path.extname(files[i]) === "." + ext) {
					result[result.length] =  files[i];

				};
			};
			callback(null,result);
		});
		
}
