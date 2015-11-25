/* globals WOW:false window*/
(function ($) {
  'use strict';

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '#mainNav',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  var header = $('#mainNav');
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass('shadedheader');
    } else {
      header.removeClass('shadedheader');
    }
  });

  // Fit Text Plugin for Main Header
  $('h1').fitText(
    1.2, {
      minFontSize: '35px',
      maxFontSize: '65px'
    }
  );

  $(function () {
    var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'gc.digitalfellows' + '@' + 'gm' + 'ail' + '.' + 'com');
  })

  // Initialize WOW.js Scrolling Animations

  new WOW().init();
})(jQuery);

//# sourceMappingURL=main.js.map
