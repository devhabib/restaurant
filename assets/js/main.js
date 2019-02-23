(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		new WOW().init();
		// Magnific Popup starts
		$('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
					enabled: true
				}
		})

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

	// Typed js

	var typed = new Typed('#typed', {
    strings: ["serve best food","are the best"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 20,
    startDelay: 500,
    cursorChar: '_',
    smartBackspace: true
  });
// Typed js ends
}(jQuery));