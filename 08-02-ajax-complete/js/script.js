$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		$.ajax('result.html', {
			beforeSend: function () {
				$('#status').text('Loading..');
			}
		})
		.done(function (response) {
			$('#result').html(response);
		})
		.always(function () {
			$('#status').text('Completed.');
		});
	});	
});