$(document).ready(function(){
	// CSS Selector
	var result = $('#animals > .crature');
	// console.log(result);

	// DOM traversing
	result = $('#animals').children('.creature');
	console.log(result);
	
});