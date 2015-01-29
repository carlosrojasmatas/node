var nums = [1,2,3,4,5,6,7,8,9,10]

var filt = nums.filter(function(n){
	return (n % 2 === 0)
})

console.log(filt);