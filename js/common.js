$('.slid-resurs').slick({
    arrows: true,
    dots: false,
    speed: 1500,
    variableWidth: true,
    autoplay: true
});
$('.top-slider').slick({
    arrows: false,
    dots: false,
    speed: 500,
    fade: true,
    autoplay: true
});
$(document).ready(function(){
    AOS.init({
        offset: 200,
        duration: 500,
        easing: 'ease-in-sine',
        delay: 100,
    });
    $('#lightgallery').lightGallery();

});
