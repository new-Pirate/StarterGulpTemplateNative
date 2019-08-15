$(document).ready(function () {

	/* Слайдер */

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
				min: "Рост должен быть не меньше 50 см",
				max: "Рост должен быть не больше 250 см",
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

/* Яндекс API */

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('map', {
		center: [56.32051847, 44.02081752],
		zoom: 11
	});

	// Настройки элементов управления

	myMap.controls.remove('trafficControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('zoomControl');
	myMap.controls.remove('geolocationControl');


	myMap.controls.add('zoomControl', {
		size: "small",
		position: {
			top: '300px',
			right: '20px'
		},
		layout: 'round#zoomLayout',
	});

	myMap.controls.add('geolocationControl', {
		size: "small",
		position: {
			top: '240px',
			right: '20px'
		},
		layout: 'round#buttonLayout',
	});

	// Параметры метки

	var myPlacemark = new ymaps.Placemark([56.32051847, 44.02081752], {}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: '../img/map-marker-icon.png',
		iconImageSize: [26, 38],
		iconImageOffset: [-16, -38],
	});
	myMap.geoObjects.add(myPlacemark);
}