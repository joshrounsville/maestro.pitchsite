$(function() {

  // set booleans for window size
  var body = $('body');
  var isPhone = body.css('padding-bottom') === '1px';
  var isDesktop = body.css('margin-bottom') !== '1px';
  var notDesktop = body.css('margin-bottom') === '1px';


  // svg fallback
  if ( !Modernizr.svg ) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }


  // apply random body class for colors
  var classes = ['blue', 'purple', 'light-blue', 'orange'];
  var random = classes[Math.floor(Math.random() * classes.length)];

  body.addClass(random);



  // animate stuff when it comes on the screen
  var animate = $('.on-screen');

  var animateGo = function() {

    $(animate).each(function() {
      if ($(this).isOnScreen()) {
        $(this).addClass('go');
      }
    });

  };

  $(window).scroll(animateGo);

});