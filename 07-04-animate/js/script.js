$(document).ready(function() {

	$('#example1').on('click', function () {
		$(this).animate({
			// opacity: 0.3
			opacity: '-=0.1'
		}, 500/* , function() {alert('complated');}*/);
	});

	$('#example2').on('click', function () {
		$(this).animate({
			left: 200,
			width: 40
		}, 500/* , function() {alert('complated');}*/);
	});

	$('#example3').on('click', function () {
		$(this).animate({
			left: '+=20',
			width: '+=50'
		}, 500/* , function() {alert('complated');}*/);
	});

});