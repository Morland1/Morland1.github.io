$(document).ready(function() {
// card
	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

// carusel
	$('.slide').owlCarousel({
		items: 5,
		loop: true,
		margin: 20,
		nav: true,
		navText : "",
		autoplay : true,
		autoplaySpeed : 600,
		responsiveClass:true,
		responsive:{
				0:{
					items: 1,
					nav: true
				},
				480:{
					items: 2,
					nav:true
				},
				768:{
					items: 2,
					nav: false
				},
				1024:{
					items: 3,
					nav: true	
				}
		}
	});

/// fixed top-line
	$(".top-header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$(".top-header").addClass("default").fadeIn('fast');
		} else {
			$(".top-header").removeClass("default").fadeIn('fast');
		};
	});

/// menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".homsect.section_1 .img-wrap").animated("fadeInLeft");
	$(".homsect.section_1 .sect-head").animated("fadeInRight");
	$(".homsect.section_2 .sect-head").animated("fadeInLeft");
	$(".homsect.section_2 .img-wrap").animated("fadeInRight");
	$(".homsect .section-head h2").animated("zoomIn");
	$(".homsect .section-head p").animated("zoomIn");
	$("#link1, #link2, #link3").animated("fadeInDown");
	$("#img1, #img2, #img3, #img4").animated("fadeInDown");
	$("#items_p1, #items_p2, #items_p3").animated("bounce");
	$(".section_9 h2, .wrap-img").animated("zoomIn");
	
/// item
	$(".section_3").waypoint(function() {
		$(".s3-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

/// кнопка наверх

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

// Parallax
	$.stellar({
		responsive: true,
	});

	smoothScroll.init({
		speed: 1000, // Integer. How fast to complete the scroll in milliseconds
		easing: 'easeInOutCubic', // Easing pattern to use
		updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
		offset: 90, // Integer. How far to offset the scrolling anchor location in pixels
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});

	// Smooth scroll with navigation
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			 scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		return false;
		e.preventDefault();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
