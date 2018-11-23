$(document).ready(function(){
  if ($('.reviews-slider').length) {
    $('.reviews-slider').slick({
      infinite: true,
      speed: 500,
      fade: true
    });
  }
});

$("._open-success-call-modal").click(function(event) {
  event.preventDefault();
  $("#success-modal").modal();
  return false;
});

$("._open-calc-modal").click(function(event) {
  event.preventDefault();
  $("#success-calc-modal").modal();
  return false;
});
