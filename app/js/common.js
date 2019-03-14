$(document).ready(function () {
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
});