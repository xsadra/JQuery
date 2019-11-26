$(document).ready(function() {
	$('#add-container').on('click', 'button', function () {
		var value = $('#add-container input').val();

		var html = '<div class="item">\
		<div class="remove">X</div>'+ value +'</div>';
		
		$(html).appendTo('#places-container');
	});

	// This doesn't work for new Element
	// $('#places-container .remove').on('click', function () {
	// 	$(this).parent().remove();
	// });

	$('#places-container').on('click', '.remove', function () {
		$(this).parent().remove();
	});
});