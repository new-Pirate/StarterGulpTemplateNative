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

    $('.next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* Валидация */

    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            number: {
                required: true
            },
            email: {

            },
            tel: {
                digits: true,
                required: true
            },
            password: {
                required: true
            },
            password_again: {
                required: true,
                equalTo: "#password"
            },
            file: {
                required: true
            },
            url: {
                required: true
            },
        },

        messages: {
            name: {
                required: "Поле обязательно"
            },
            number: {
                min:"Рост должен быть не меньше 50 см",
                max:"Рост должен быть не больше 250 см",
                required: "Поле обязательно"
            },
            email: {
                email: "Введите корректный E-Mail в формате example123@site.com",
                required: "Поле обязательно"
            },
            tel: {
                digits: "Введите корректный телефон в формате +7 (123) 456-78-90",
                required: "Поле обязательно"
            },
            password: {
                minlength: "Количество символов должно быть больше 6",
                required: "Поле обязательно"
            },
            password_again: {
                minlength: "Количество символов должно быть больше 6",
                required: "Поле обязательно",
                equalTo: "Повторите пароль"
            },
            file: {
                required: "Поле обязательно"
            },
            url: {
                required: "Поле обязательно",
                url: "Введите корректный URL в формате http://mysite.ru"
            },
        }
    });

    /* Mask */

    $('#phone').mask('+0 (000) 000-00-00');
    $('#growth').mask('000');
});