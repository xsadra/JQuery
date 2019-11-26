$(document).ready(function() {
	//$('#container').text('Sadra');
	$('#container').html('<strong>Sadra</strong>');
	console.log($('#container').html());

	//$('#container').empty();
	
	// Add new attribute to the Element
	$('#container').attr('data-name', 'Sadra');
	//console.log($('#container').attr('data-name'));
	console.log($('#container').data('name'));
	
});