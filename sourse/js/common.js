const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},


	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	// JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/3.png);"></div>')
	// /добавляет подложку для pixel perfect



	// /закрыть/открыть мобильное меню

	// листалка по стр
	$("   .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	const icon = '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="791.966px" height="791.967px" viewBox="0 0 791.966 791.967" style="enable-background:new 0 0 791.966 791.967;" xml:space="preserve"><path d="M245.454,396.017L617.077,56.579c12.973-12.94,12.973-33.934,0-46.874c-12.973-12.94-34.033-12.94-47.006,0L174.615,370.896c-6.932,6.899-9.87,16.076-9.408,25.087c-0.462,9.045,2.476,18.188,9.408,25.088l395.456,361.19c12.973,12.94,34.033,12.94,47.006,0c12.973-12.939,12.973-33.934,0-46.873L245.454,396.017z"/></svg>';
	const arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель

	const defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive',
	};
	$('.s-catalog__slider--js').slick({
		...defaultSlide,

		slidesToShow: 1,
		dots: true,
		appendArrows: '.control-wrap',
		appendDots: '.control-wrap',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}


		}],

	});


	//    const wow = new WOW({ mobile: false });
	//         wow.init();
	$(".catalog-menu__toggle").click(function () {
		$(this).parent().toggleClass('active');
	})
	$(".messanger-block__item--search").click(function () {
		$(".form-search").slideToggle().find("input").focus();
	})

	$('.custom-input-time__input').change(function () {
		$(this).parents('form').find('.toggle-wrap-input-js').toggle().toggleClass('active');
	})

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}