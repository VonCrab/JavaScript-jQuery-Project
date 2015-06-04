var x,
  squareHeightWidth;

var main = function() {

  //Initialization of webpage
  $( '.container' ).append( "<div id='overlord'></div>");
  drawGrid(16);
  mouseTrailMode();


  $( '#build-grid' )
    .click( function() {
      gridSize = prompt( "Enter the length of the grid:" );
      drawGrid( gridSize );
    });

    $( '#clear-grid' )
      .click( function() {
        $( '.active' ).removeClass('active');
        $( '.trail' ).removeClass('trail')
      });

};

var drawGrid = function ( rows ) {
  x = 0,
  squareHeightWidth =  960 /  rows;

  $('.grid-square').remove();

  for ( ; x < ( rows * rows ) ; x++ ) {
    $( '#overlord' ).append( "<div class='grid-square'></div>" );
  }

  $('.grid-square').css ( 'height', squareHeightWidth + 'px' );
  $('.grid-square').css ( 'width', squareHeightWidth + 'px' );

  mouseTrailMode();

};

function mouseTrailMode () {

  $( '.grid-square' )
    .mouseenter( function() {
      $( '.active' ).addClass( 'trail' );
      $( '.active' ).removeClass( 'active' );

      $(this).addClass( 'active' );
  });

};

$(document).ready(main);
