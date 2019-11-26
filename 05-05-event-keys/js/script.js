$(document).ready(function() {
	// Keydown, Keyup
	$('#example').on('keyup', 'input', function(){
		$('#result').html('Your Text is: ' + $(this).val());
	});
});