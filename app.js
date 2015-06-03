var main = function() {

  $( 'body' ).append( "<div id='overlord'></div>");

  for ( var x = 0 ; x < 4 ; x++ ) {
    $( '#overlord' ).append( "<div class='x-row'></div>" );
  }

  for ( var y = 0 ; y < 4 ; y++ ) {
    $( '.x-row' ).append( "<div class='grid-square'></div>" );
  }

  $('.grid-square')
    .mouseenter(function() {
      $('.active').addClass('trail');
      $('.active').removeClass('active');

      $(this).addClass('active');
  });

};

$(document).ready(main);
