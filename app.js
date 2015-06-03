var x;

var main = function() {

  $( 'body' ).append( "<div id='overlord'></div>");

  drawGrid(256);

  $( '.grid-square' )
    .mouseenter( function() {
      $( '.active' ).addClass( 'trail' );
      $( '.active' ).removeClass( 'active' );

      $(this).addClass( 'active' );
  });

};

var drawGrid = function ( tiles ) {
  x = 0;

  var tilesPerRow = Math.sqrt( tiles );

  for ( ; x < tiles ; x++ ) {
    $( '#overlord' ).append( "<div class='grid-square'></div>" );
  }

  $('.grid-square').width ( (960 -  tilesPerRow * 2)  / tilesPerRow );
  $('.grid-square').height ( (960 - tilesPerRow * 2) / tilesPerRow );

};

$(document).ready(main);
