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

var characteristicsBlocks = document.querySelectorAll(".characteristics");
var showMoreBtns = document.querySelectorAll("._show-more-btn");
var body = document.querySelector("body");

showMoreBtns.forEach(function(el) {
  el.addEventListener("click", function(e) {
    e.stopPropagation();
    var characteristics = el.nextElementSibling;
    characteristicsBlocks.forEach(function(block) {
      if (block.classList.contains("active") && block !== characteristics) {
        block.classList.remove("active");
      }
    });
    characteristics.classList.toggle("active");
  })
});

body.addEventListener("click", function(e) {
  e.stopPropagation();
  characteristicsBlocks.forEach(function(block) {
    if (block.classList.contains("active")) {
      block.classList.remove("active");
    }
  });
});
