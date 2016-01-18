'use strict';

function postToGoogle() {
  var inputs = $('form#google-form').serializeJSON();
  var successPage = $('form#google-form').data('success');
  console.log(inputs);
  $.ajax({
    url: 'https://docs.google.com/forms/d/109PlfwGQc0O8NaeRHKv2x3Ic3_N7wuJccApU1fm43Vc/formResponse',
    data: inputs,
    type: 'POST',
    dataType: 'xml',
    statusCode: {
      404: function (xhr, textStatus) {
        var msg = 'Something went wrong. Please email us. <br>Status code: ' + xhr.status + ' message: ' + textStatus;
        var status = 'error';
        showAlert(msg, status);
      },
      0: function () {
        var msg = 'Your application submitted successfully!';
        var status = 'success';
        showAlert(msg, status);
      },
      200: function () {
        var msg = 'Your application submitted successfully!';
        var status = 'success';
        showAlert(msg, status);
        window.location.href = successPage;
      }
    }
  });
}

function showAlert(msg, status) {
  var innerHTML = '<div class="alert alert-' + status + ' alert-dismissible fade in" role="alert">';
  innerHTML += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
  innerHTML += '<span aria-hidden="true">&times;</span>';
  innerHTML += '<span class="sr-only">Close</span>';
  innerHTML += '</button>';
  innerHTML += '<strong>' + msg + '</strong></div>';
  $('#submit-status').html(innerHTML);
}

$(document).ready(function () {
  $('form#google-form').submit(function () {
    postToGoogle();
    return false;
  });

  $('#entry_1459909620').change(function () {
    if ($('#entry_1459909620').val() === 'Other') {
      $('#other-program').removeAttr('hidden');
    } else {
      $('#other-program').attr('hidden', '');
    }
  });

  $('#group_735949125_13').change(function () {
    if ($('#group_735949125_13').is(':checked')) {
      $('#other-interest').removeAttr('hidden');
    } else {
      $('#other-interest').attr('hidden', '');
    }
  });

  $('input[name="entry.1552330148"]').change(function () {
    if ($('#group_1552330148_1').is(':checked')) {
      $('#other-commit').attr('hidden', '');
    } else {
      $('#other-commit').removeAttr('hidden');
    }
  });

  $('input[name="entry.1726201261"]').change(function () {
    if ($('#group_1726201261_2').is(':checked')) {
      $('#laptop-os').attr('hidden', '');
    } else {
      $('#laptop-os').removeAttr('hidden');
    }
  });
});

/* globals WOW:false window document*/
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
    var contactform = document.getElementById('contactform');
    var emailAddress = 'gc.digitalfellows';
    emailAddress += '@';
    emailAddress += 'gmail';
    emailAddress += '.com';
    if (contactform) {
      contactform.setAttribute('action', '//formspree.io/' + emailAddress);
    }
  });

  // Initialize WOW.js Scrolling Animations

  new WOW().init();
})(jQuery);

//# sourceMappingURL=main.js.map
