;(function($) {
  "use strict"; // Start use strict
  
  // It's in a timeout because Edge
  $(document).ready(setTimeout(function(){
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
  }, 150));
  
  
  
  
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

// Contact card
;(function ($) {
  "use strict";
  
  let contactCard  = document.getElementsByClassName('contact-card')[0],
  cName = contactCard.getAttribute('data-toggle'),
  cardTranslation = -2.5,
  cardRotation = -4.5,
  intervalMoveCard;
  let arrow = document.getElementsByClassName('scroll-arrow')[0],
  moveArrow = 0;
  let menu = document.getElementsByClassName('menu-toggle')[0];
  
  let isFirstClick = true;
  
  if (!contactCard) return;
  
  // Click on card:
  // - Stop animating and flip the card
  // - Enable scrolling
  // - Show the scroll indicator arrow
  contactCard.addEventListener('click', function (event) {
    
    if (isFirstClick) {
      // Stop wiggling the card around
      clearInterval(intervalMoveCard);
      contactCard.style.transform = '';
      // Make the transitions quicker, for flipping
      contactCard.style.transition = 'transform 0.70s cubic-bezier(0.49, 0.23, 0.58, 0.49)';
      
      // Enable scrolling
      $('body').css({
        overflow: 'auto'
      });
      // Fade in the scroll arrow
      // $(arrow).fadeIn(1000, "swing");
      $(arrow).slideDown(2000);
      // Move the arrow up and down periodically
      setTimeout(setInterval(function () {
        moveArrow = moveArrow ? 0 : 30;
        arrow.style.transform = 'translateY(' + moveArrow + 'px)';
      }, 1400), 2200);
      
      // Show the menu
      $('#mainNav').fadeIn(2000, "swing");
      
      // Initialize tooltips, show on hover
      $(function () {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });     
    }
    isFirstClick = false;
    
    // Do not flip the card if the user is trying to tap a link.
    if (event.target.nodeName === 'I' || event.target.nodeName === 'A') {
      return;
    }
    
    let toggled = contactCard.classList.contains(cName);
    contactCard.classList[toggled ? 'remove' : 'add'](cName);
    
  });
  
  // Move the card to attract attention
  intervalMoveCard = setInterval(function () {
    // moveCard = moveCard ? 0 : 30;
    // contactCard.style.transform = 'translateY(' + moveCard + 'px)';
    
    cardTranslation = cardTranslation === 2.5 ? -2.5 : 2.5;
    cardRotation = cardRotation === 4.5 ? -4.5 : 4.5;
    contactCard.style.transform = 'translateX(' + cardTranslation + '%) rotateY(' + cardRotation + 'deg)';
  }, 2000);
  
  
  
  
})(jQuery);

// Tech section
var $techSection = $('.tech').find('.container');
var $cardWrappers = $('.tech-card');

$(window).on('resize', function(){
  $techSection.removeAttr( 'style' );
  if ($(window).width() > 767) {
    setTimeout(function(){
      $techSection.css('min-height', $techSection.height());
    }, 350);
  }
});


// var cardHeight = $cardWrappers.height();

// Add click listeners to cards
// Open and close drawer on card click
$cardWrappers.find('.js-expand').click(function() {
  
  // Stop the whole section from changing height when animating switching drawers
  // It will be allowed to shrink when finally closing all drawers
  // If no drawers are expanded && not mobile
  if (!$cardWrappers.hasClass('is-expanded') && $(window).width() > 767){
    // Wait for open-drawer animation to finish
    setTimeout(function(){
      // Make tech-section's expanded height its min-height
      $techSection.css('min-height', $techSection.height());
    }, 350);
  }
  
  let $thisWrapper = $(this).closest('.tech-card');
  
  // If clicking on a closed card
  if ($thisWrapper.hasClass('is-collapsed')) {
    // Make all OTHER cards collapsed and inactive
    $cardWrappers.not($thisWrapper).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    // Expand selected card
    $thisWrapper.removeClass('is-collapsed').removeClass('is-inactive').addClass('is-expanded');
    
    
    // if ($cardWrappers.not($thisWrapper).hasClass('is-inactive')) {
    //   //do nothing
    // } else {
    //   $cardWrappers.not($thisWrapper).addClass('is-inactive');
    // }
    
    // if(window.innerWidth <= 767) {
    //   $('html').animate({
    //     scrollTop: $thisWrapper.offset().top + cardHeight - drawerHeight - 10
    //   }, 300);
    // } else {
    //   $('html').animate({
    //     scrollTop: $thisWrapper.offset().top - drawerHeight - 10
    //   }, 300);
    // }
    
    
    // Else If clicking on an open card  
  } else {
    // Collapse it
    $thisWrapper.removeClass('is-expanded').addClass('is-collapsed');
    // Reactivate other cards
    $cardWrappers.not($thisWrapper).removeClass('is-inactive');
    // To remove min-height property of tech section:
    // Remove all dynamic styling
    $techSection.removeAttr( 'style' );
  }
});

// Click X to close the drawer
$cardWrappers.find('.js-collapse').click(function() {
  
  // To remove min-height property of tech section:
  // Remove all dynamic styling
  $techSection.removeAttr( 'style' );
  
  let $thisWrapper = $(this).closest('.tech-card');
  
  $thisWrapper.removeClass('is-expanded').addClass('is-collapsed');
  $cardWrappers.not($thisWrapper).removeClass('is-inactive');
});

// setInterval(function(){
//   drawerHeight = $cardWrappers.not('.is-collapsed').find('.tech-card_drawer').height();
//   if (!drawerHeight) drawerHeight = 0;
//   console.log(drawerHeight);
// }, 350);
