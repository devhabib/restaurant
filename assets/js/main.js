(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		new WOW().init();

		// Owl carousel
		$('.special_menu').owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			dots: true
		});
		$('.customer_carousel').owlCarousel({
			items: 2,
			loop:true,
			autoplay:true,
			dots: true
		});
		// Owl Carousel ends

		// SlickNav
		$('#menu').slicknav();

		// Type it
		new TypeIt('.type-it', {
		    strings: 'serve fresh food',
		    loop: true
		});

	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
	});
}(jQuery));