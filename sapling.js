// Toggle Menu
$(window).on('resize', function(){
  if($(window).width() >=900) {
    $('.navbar ul').show();
  } else {
    $('.navbar ul').hide();
  }
});

// Resize Menu
$(document).ready(function(){
  $('#mobile-menu').click(function(){
    $('.navbar ul').slideToggle();
  });
});
