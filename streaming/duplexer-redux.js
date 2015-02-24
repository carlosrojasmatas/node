var duplexer = require("duplexer");
var throug = require("through");

module.exports=  function(counter) {
	var c = {};

	return duplexer(throug(doCount,endCount),counter)


	function doCount(obj){
		var country = obj.country;
		var ccount = c[country] || 0;
		c[country] = ccount + 1;
	}

	function endCount(){
		counter.setCounts(c);
		c = {};
	}
}
