$(document).ready(function() {

	$('#example').on('click', 'button.switch', function () {
		$.ajax('result.html')
		.done(function (recponse) {
			$('#result').html(recponse);		
		});
	});
});