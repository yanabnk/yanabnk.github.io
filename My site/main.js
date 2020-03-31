$(function(){
//   Fixed header
   let header = $("#header");
   let intro = $("#intro");
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   let nav = $("#nav");
   let navToggle = $("#navToggle");

   checkScroll(scrollPos, introH)

   $(window).on("scroll resize", function(){
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
   });

   function checkScroll(scrollPos, introH){
    if(scrollPos> introH){
        header.addClass("fixed");
    }else{
        header.removeClass("fixed");
    }
   }


// Smooth scroll

$("[data-scroll]").on("click",function(event){
    event.preventDefault();

    let blockID = $(this).data('scroll');
    let elementOffset = $(blockID).offset().top;

    nav.removeClass("show");

    $("html,body").animate({
        scrollTop: elementOffset - 90
    }, 700)

})

// Nav Toggle


  navToggle.on("click", function(event){
    event.preventDefault();

    nav.toggleClass("show");

});

// Reviews https://kenwheeler.github.io/slick/
let slider = $("#reviewsSlider");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true
  });

});
// SWITCH

var checkbox = document.getElementById('themer');
var invertor = document.getElementById('inverter');

checkbox.addEventListener('change', function () {
  // Triggers repaint in most browsers:
  invertor.setAttribute('media', this.checked ? 'screen' : 'none');
  // Forces repaint in Chrome:
  invertor.textContent = invertor.textContent.trim();
});