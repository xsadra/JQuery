$(document).ready(function() {
    $('#add-container').on('click', 'button', function () {
        var value = $('#add-container input').val();
        console.log(value);

        var html = '<div class="item">\
        <div class="remove">X</div>'
        + value +'</div>';
        console.log(html);
        
        // Append to the End of list
        // $('#places-container').append(html);
        // $(html).appendTo('#places-container');    
        
        // Append to the Top of list
        // $('#places-container').prepend(html);
        $(html).prependTo('#places-container');
    });
});