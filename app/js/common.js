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
});

/* Форма */

const form = document.getElementsByClassName('form')[0];
const email = document.getElementById('email');
const text = document.getElementById('text');
const errorEmail = document.querySelector('.errorEmail');
const errorText = document.querySelector('.errorText');

email.addEventListener("input", function (event) {
	// Каждый раз, когда пользователь вводит что-либо, мы проверяем, является ли корректным поле электронной почты.
	if (email.validity.valid) {
		// В случае появления сообщения об ошибке, если поле является корректным, мы удаляем сообщение об ошибке.
		errorEmail.innerHTML = ""; // Сбросить содержимое сообщения
		errorEmail.className = "errorEmail"; // Сбросить визуальное состояние сообщения
	} else {
		errorEmail.innerHTML = "Поле e-mail обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке. 
		email.className = "error";
	}
}, false);

text.addEventListener("input", function (event) {
	// Каждый раз, когда пользователь вводит что-либо, мы проверяем, является ли корректным поле текста.
	if (text.validity.valid) {
		// В случае появления сообщения об ошибке, если поле является корректным, мы удаляем сообщение об ошибке.
		errorText.innerHTML = ""; // Сбросить содержимое сообщения
		errorText.className = "errorText"; // Сбросить визуальное состояние сообщения
	} else {
		errorText.innerHTML = "Поле Text обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке.
		text.className = "error";
	}
}, false);

form.addEventListener("submit", function (event) {
	// Каждый раз, когда пользователь пытается отправить данные, мы проверяем валидность полей.
	if (!email.validity.valid) {
		errorEmail.innerHTML = "Поле e-mail обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке. 
		email.className = "error";
		// И мы предотвращаем отправку формы путем отмены события
		event.preventDefault();
	}

	if (!text.validity.valid) {
		errorText.innerHTML = "Поле Text обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке.
		text.className = "error";
		// И мы предотвращаем отправку формы путем отмены события
		event.preventDefault();
	}
}, false);