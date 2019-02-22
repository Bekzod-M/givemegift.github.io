$(document).ready(function(){
  // Находим плавающий блок и делаем его плавающим
  $('.products').stick_in_parent({
    // Отступ сверху
    offset_top: 20
  });
});

$('.burger').on('click', function(){
  $('.nav').animate({
    left: 0
  }, 500);
});
$('.close').on('click', function(){
  $('.nav').animate({
    left: -770
  }, 500);
});

$(".fa-heart").click(function() {
	$(this).toggleClass("fa-heart-o");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$('.related').owlCarousel({
  center: true,
  items:1,
  loop:true,
  nav:true,
  margin:10,
});