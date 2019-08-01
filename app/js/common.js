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
		owl.trigger('prev.owl.carousel', [1000]);
	});
});

/* Форма */

const form = document.getElementById('form');
const email = document.getElementById('email');
const text = document.getElementById('text');
const errorEmail = document.querySelector('.errorEmail');
const errorText = document.querySelector('.errorText');

email.addEventListener("input", function (event) {
	// Каждый раз, когда пользователь вводит что-либо, мы проверяем, является ли корректным поле электронной почты.
	if (email.validity.valid) {
		// В случае появления сообщения об ошибке, если поле является корректным, мы удаляем сообщение об ошибке.
		errorEmail.innerHTML = ""; // Сбросить содержимое сообщения
	} else {
		errorEmail.innerHTML = "Введите валидный e-mail";// Если поле невалидно, отображается пользовательское сообщение об ошибке. 
		email.classList.add("error");
	}
});

text.addEventListener("input", function (event) {
	// Каждый раз, когда пользователь вводит что-либо, мы проверяем, является ли корректным поле текста.
	if (text.validity.valid) {
		// В случае появления сообщения об ошибке, если поле является корректным, мы удаляем сообщение об ошибке.
		errorText.innerHTML = ""; // Сбросить содержимое сообщения
	} else {
		errorText.innerHTML = "Введите валидный Text";// Если поле невалидно, отображается пользовательское сообщение об ошибке.
		text.classList.add("error");
	}
}, false);

form.addEventListener("submit", function (event) {
	// Каждый раз, когда пользователь пытается отправить данные, мы проверяем валидность полей.
	if (!email.validity.valid) {
		errorEmail.innerHTML = "Поле e-mail обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке. 
		email.classList.add("error");
		event.preventDefault();// И мы предотвращаем отправку формы путем отмены события
	}

	if (!text.validity.valid) {
		errorText.innerHTML = "Поле Text обязательно";// Если поле невалидно, отображается пользовательское сообщение об ошибке.
		text.classList.add("error");
		event.preventDefault();// И мы предотвращаем отправку формы путем отмены события
	}
});