$(document).ready(function() {
	$('.item-box').on('click', 'a.info-link', function (event) {
		event.preventDefault();

		// slideDown(), slideUp(), slideToggle()
		$(this).closest('.item-box').find('.more-info').slideToggle('fast');
	});
});