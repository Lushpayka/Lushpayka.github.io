$(function() {

	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();


	$(window).on("scroll resize ", function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
			if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */

	$("[data-scroll]").on("click", function(event) {

		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		

		$("html, body").animate({
			scrollTop:elementOffset - 75
		}, 700)

	});

});

$(".works__foto").attr('src','/img/pf2.png');