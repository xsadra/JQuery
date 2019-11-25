$(document).ready(function() {
// Get Cat!
// First, Last
var result = $('#animals').children().first()
				.children('.creature').last();
console.log(result);

//Priv
result = $('#animals').children().first()
				.children().last().prev().prev();
console.log(result);


//Next
result = $('#animals').children().first()
				.children().first().next();
console.log(result);
});