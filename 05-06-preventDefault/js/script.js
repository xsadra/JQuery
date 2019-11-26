$(document).ready(function () {
	$('#example').on('click', 'a', function (event) {
		event.preventDefault(); // Set default
		event.stopPropagation();	// Stop send the event to parents!
		console.log($(this).text());
	});

	$('#example').on('click', function (event) {
		event.preventDefault();
		console.log('Container');
	});
});