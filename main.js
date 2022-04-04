$(document).ready(() => {
  "use strict";
  
  const contactCard  = $('#contact-card').get(0);
  
  let isFirstClick = true;
  
  $("body").tooltip({
    selector: '[data-toggle=tooltip]',
    trigger: 'hover',
    container: 'body'
  });
  contactCard.addEventListener('click', function (event) {
    if (isFirstClick) {
      // Make the transitions quicker, for flipping
      contactCard.style.transition = 'transform 0.70s cubic-bezier(0.49, 0.23, 0.58, 0.49)';
      isFirstClick = false;
    }
    
    // Do not flip the card if the user is trying to tap a link.
    if (event.target.nodeName === 'I' || event.target.nodeName === 'A') {
      return;
    }

    contactCard.classList[contactCard.classList.contains('flipped') ? 'remove' : 'add']('flipped');
  });     
});