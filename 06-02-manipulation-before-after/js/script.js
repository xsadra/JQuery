$(document).ready(function () {
	$('#add-container').on('click', 'button', function () {
        var value = $('#add-container input').val();
		
		var html = '<div class="item">\
        <div class="remove">X</div>'+ value +'</div>';
		
		// Add new after last Element in the list
		// $('#places-container').children().last().after(html);

		// Add new before first Element in the list
		// $('#places-container').children().first().before(html);

		// Add new after first Element in the list(second position)
		$('#places-container').children().first().after(html);
    });
});