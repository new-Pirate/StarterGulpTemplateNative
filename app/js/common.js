$(document).ready(function () {

    /* Карусель */

    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        center: true,
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('.prev').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* Валидация */

    $('#phone').mask('+0 (000) 000-00-00');
    $('#growth').mask('000');
});