$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('xxresult.html', {
			beforeSend: function () {
				$('#status').text('Loading..');
			}
		})
		.done(function (response) {
			$('#result').text(response);
		})
		.fail(function (request, errorType, errorMessage) {
			// errorType: timeout, error, abort, parseerror
			alert(errorMessage);
			console.log(errorType);
			console.log(request);
		})
		.always(function () {
			$('#status').text('Completed.');
		});
	});	
});