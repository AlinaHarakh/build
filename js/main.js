$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		// autoPlay:true,
		waitForAnimate: true,
		// centerMode: true,
		// variableWidth: true,
		focusOnSelect: true,
		// initialSlide: 0,
		asNavFor: ".sliderbig",
		responsive: [
			{
				breakpoint: 1365,
				settings: {
					slidesToShow: 2,
					// variableWidth: false,
				}
			},
			{
				breakpoint: 1061,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				}
			}
		],
		customPaging: function (slider, i) {
			return '<span class="pagination-number">' + (i + 1) + '</span> / ' + slider.slideCount;
		}
	});

	$('.projects-slider').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-dots li button').attr('aria-pressed', 'false');
		$('.slick-dots li button').eq(currentSlide).attr('aria-pressed', 'true');
		$('.slick-dots li button').eq(currentSlide).parent().addClass('slick-active');

	});

	$('.sliderbig').slick({
		arrows: false,
		infinite: true,
		fade: true,
		asNavFor: ".slider"
	});
	$('.projects-slider').slick({
		arrows: true,
		// variableWidth: true,
		// centerMode: true,
		centerMode: true,
		focusOnSelect: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					// variableWidth: false,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 2,
					// variableWidth: false,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					slidesToScroll: 1,
					centerMode: false,
					adaptiveHeight: false
				}
			},
		],
		customPaging: function (slider, i) {
			return '<span class="pagination-number">' + (i + 1) + '</span> / ' + slider.slideCount;
		}
	});

	$('.projects-slider').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-dots li button').attr('aria-pressed', 'false');
		$('.slick-dots li button').eq(currentSlide).attr('aria-pressed', 'true');
		$('.slick-dots li button').eq(currentSlide).parent().addClass('slick-active');
	});
});

$('.burger').on('click', function () {
	$('.menu__list').toggleClass('menu__list--active');
	$(this).toggleClass("open");
});

// Form
$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Дякуємо! Ми отримали вашу заявку. Наш менеджер зв'яжеться з Вами найближчим часом.");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


// TABS
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const tabId = tab.getAttribute('data-tab');

		// Переключение класса активности кнопки
		tabs.forEach((tab) => {
			tab.classList.remove('tab-active');
		});
		tab.classList.add('tab-active');

		// Переключение класса видимости контента
		tabContents.forEach((tabContent) => {
			if (tabContent.getAttribute('data-tab') === tabId) {
				tabContent.classList.remove('tab-hide');
			} else {
				tabContent.classList.add('tab-hide');
			}
		});
	});
});

