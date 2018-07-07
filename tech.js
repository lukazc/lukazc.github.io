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
