$(document).ready(function() {
  // Loading the Data
  $.ajax('destinations.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
  .done(function (response) {
      var html;
      // Create HTML Items
      $.each(response, function (index, element) {
        html = '<div class="item-box" data-id="' + element.id + '">';
        html += 	'<img src="images/' + element.image + '" />';
        html +=	'<div class="item-title">' + element.name + '</div>';
        html +=	'<p>' + element.description + '</p>';
        html +=	'<div class="item-price">$' + element.price + '</div>';
        html +=	'<button>Add to cart</button>';
        html +=    '<div>';
        html +=	   '<a href="#" class="info-link">More info</a>';
        html +=	'</div>';
        html +=   '<div class="more-info">';
        html +=        '<p>' + element.moreInfo + '</p>';
        html +=	'</div>';
        html +='</div>';
        
        // Add new Items to the body
        $(html).appendTo('body');
      });

    // Show more info
    $('body').on('click', '.info-link', function (event) {
      event.preventDefault();
      $(this).closest('.item-box').find('.more-info').slideToggle();
    });

    var cart = 0;

    // Add Item to BUY list
    $('body').on('click', '.item-box button', function (event) {
      event.preventDefault();
      var id = +$(this).closest('.item-box').data('id'); // Add a + to make sure we get a number
      
      // Send Id and Get Data from Server
      $.ajax('addItem.json', {
        type: 'POST',
        data: {id: id},
        dataType: 'json',
        contentType: 'application/json'
      })
      .done(function (response) {
        cart += response.price;
        $('#total-cost').text('TOtal $' + cart);
      });

    });
  });
});
