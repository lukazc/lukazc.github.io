;(function($) {
  "use strict"; // Start use strict
  
  $(document).ready(function(){
    // Adjust position of the fixed button in case of width > 1950
    adjustFixedButtonPosition();

    // If reloading mid-page
    if ($(window).scrollTop() > 0) {
      // Enable scrolling
      $('body').css({
        overflow : 'auto'
      });
      // Enable navbar
      $('#mainNav').css({
        display: 'block'
      });
      // Show the above-fold scroll-down arrow
      $('.scroll-arrow').show();
    }
  });




// Show the navbar when the page is scrolled up
var MQL = 992;
var viewportWidth = $(window).width();

//primary navigation slide-in effect
if (viewportWidth > MQL) {
  var headerHeight = $('#mainNav').height();
  $(window).on('scroll', {
    previousTop: 0
  },
  function() {
    var currentTop = $(window).scrollTop();
    //check if user is scrolling up
    if (currentTop < this.previousTop) {
      //if scrolling up...
      if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
        $('#mainNav').addClass('is-visible');
      } else {
        $('#mainNav').removeClass('is-visible is-fixed');
      }
    } else if (currentTop > this.previousTop) {
      //if scrolling down...
      $('#mainNav').removeClass('is-visible');
      if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
    }
    this.previousTop = currentTop;
  });
}


// Scroll to top button appears below fold
$(document).scroll(function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 150) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// If viewport is larger than maximum body width, fix the "back-to-top" button within body
function adjustFixedButtonPosition(){
  viewportWidth = $(window).width();
  if(viewportWidth > 1950) {
    $('.scroll-to-top').css({
      right: 15 + (viewportWidth - 1950) / 2
    });
  } else {
    $('.scroll-to-top').css({
      right: 15
    });
  }
}

// on every window resize
$(window).on('resize', function(){
  // Adjust "back-to-top" button
  adjustFixedButtonPosition();
});

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.position().top
    }, 650, "easeInOutCirc");
    return false;
  }
}

});

})(jQuery); // End of use strict
