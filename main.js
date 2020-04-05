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
  
})(jQuery);