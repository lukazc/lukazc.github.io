;(function ($) {
    "use strict";
    
    let contactCard  = document.getElementsByClassName('contact-card')[0],
    cName   = contactCard.getAttribute('data-toggle'),
    cardTranslation = -2.5,
    cardRotation = -4.5,
    intervalMoveCard;
    let arrow = document.getElementsByClassName('scroll-arrow')[0],
    moveArrow = 0;
    let menu = document.getElementsByClassName('menu-toggle')[0];
    
    
    if (!contactCard) return;
    
    // Click on card:
    // - Stop animating and flip the card
    // - Enable scrolling
    // - Show the scroll indicator arrow
    contactCard.addEventListener('click', function (event) {
        // Stop wiggling the card around
        clearInterval(intervalMoveCard);
        contactCard.style.transform = '';
        // Make the transitions quicker, for flipping
        contactCard.style.transition = 'transform 0.5s cubic-bezier(0.49, 0.23, 0.58, 0.49)';
        
        // Do not flip the card if the user is trying to tap a link.
        if (event.target.nodeName === 'I' || event.target.nodeName === 'A') {
            return;
        }
        
        let toggled = contactCard.classList.contains(cName);
        contactCard.classList[toggled ? 'remove' : 'add'](cName);
        
        // Enable scrolling
        $('body').css({
            overflow: 'auto'
        });
        // Fade in the scroll arrow
        // $(arrow).fadeIn(1000, "swing");
        $(arrow).slideDown(2000);
        // Show the menu
        $('#mainNav').fadeIn(2000, "swing");
        
        // Initialize tooltips, show on hover
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'hover'
            });
          });     
    });
    
    // Move the card to attract attention
    intervalMoveCard = setInterval(function () {
        // moveCard = moveCard ? 0 : 30;
        // contactCard.style.transform = 'translateY(' + moveCard + 'px)';
        
        cardTranslation = cardTranslation === 2.5 ? -2.5 : 2.5;
        cardRotation = cardRotation === 4.5 ? -4.5 : 4.5;
        contactCard.style.transform = 'translateX(' + cardTranslation + '%) rotateY(' + cardRotation + 'deg)';
    }, 2000);
    
    // Move the arrow up and down periodically
    setInterval(function () {
        moveArrow = moveArrow ? 0 : 30;
        arrow.style.transform = 'translateY(' + moveArrow + 'px)';
    }, 1400);
    
    
})(jQuery);
