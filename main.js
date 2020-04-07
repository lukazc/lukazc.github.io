// Contact card
;(function ($) {
  "use strict";
  
  let contactCard = document.getElementsByClassName('contact-card')[0],
//   contactCardShadow = document.getElementsByClassName('contact-card-shadow')[0],
  cName = contactCard.getAttribute('data-toggle');  
  let isFirstClick = true;
  
  if (!contactCard) return;
  
  // Click on card:
  // - Stop animating and flip the card
  // - Enable scrolling
  // - Show the scroll indicator arrow
  contactCard.addEventListener('click', function (event) {
    
    if (isFirstClick) {    
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
    // contactCardShadow.classList[toggled ? 'remove' : 'add'](cName);
    
  }); 
  
})(jQuery);