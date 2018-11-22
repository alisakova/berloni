$(document).ready(function(){
  if ($('.reviews-slider').length) {
    $('.reviews-slider').slick({
      infinite: true,
      speed: 500,
      fade: true
    });
  }
});
