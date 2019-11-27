$(document).ready(function() {
	
	$('#hasPets').on('change', function () {
		if ($(this).is(':checked')) {
			$('#pets-row').show();
		} else {
			$('#pets-row').hide();
		}
	});

	// Force the JavaScript to trigger CHANGE event on 'Document-Ready'.
	$('#hasPets').trigger('change');
});
