$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function (event) {
		event.preventDefault();

		// $(this).closest('.item-box').find('.more-info').show(); // .hide() // .toggle()
		// $(this).closest('.item-box').find('.more-info').toggle();
		// $(this).closest('.item-box').find('.more-info').toggle(500); // Add delay
		// $(this).closest('.item-box').find('.more-info').toggle('fast'); // slow
		$(this).closest('.item-box').find('.more-info').toggle('slow', function () {
			alert('Finished...');
		});
	});
});