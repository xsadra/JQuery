$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function (event) {
		event.preventDefault();

		// fadeIn(), fadeOut(), fadeToggle()
		$(this).closest('.item-box').find('.more-info').fadeToggle('slow');
	});
});