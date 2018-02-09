
//This is a javascript library, we can load this to the html page and the functions here should be working on html and console 

var squared = function(x){
	var squaredNumber = x * x;
	return squaredNumber;
};

var plus10 = function(x){
	var newNumber = x+10;
	return newNumber; 
};

var numbers = {
	"squared" : squared,
	"plus10" : plus10 
};