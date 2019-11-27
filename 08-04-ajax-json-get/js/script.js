$(document).ready(function() {
  $.ajax('destinations.json', {
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  })
  .done(function (response) {
      var html;
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
        
        $(html).appendTo('body');
      });

    $('body').on('click', '.info-link', function (event) {
      event.preventDefault();
      $(this).closest('.item-box').find('.more-info').slideToggle();
    });
  });
});
