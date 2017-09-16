$(document).ready(function() {


	setInterval(function() {
		var token = false;
		$('.pop').each(function() {
			if($(this).css('visibility') == 'visible') {
				token = true;
			}
		})

		if(token) {
			$('.blur').fadeIn(600);
		}
		else {
			$('.blur').fadeOut(600);
		}
	}, 100)
	// var curBox;
	$('.img_project').mouseover(function() {
		$(this).next().addClass('active');
	})

	$('.detail').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	})

	var didScroll; 
	var lastScrollTop = 0;
	var delta = 5; 
	var navbarHeight = $('header').outerHeight(); 
	$(window).scroll(function(event){ 
		didScroll = true; 
	}); 

	setInterval(function() { 
		if (didScroll) { 
			hasScrolled(); 
			didScroll = false; 
			} 
		}, 250); 

	function hasScrolled() { 
		var st = $(this).scrollTop(); 
		// Make sure they scroll more than delta 

		if(Math.abs(lastScrollTop - st) <= delta) return;
		if (st > lastScrollTop && st > navbarHeight){ 
			$('header').removeClass('nav-down').addClass('nav-up'); 
		} 
		else { 
			// Scroll Up 
			if(st + $(window).height() < $(document).height()) { 
				$('header').removeClass('nav-up').addClass('nav-down'); 
			} 
		} 
		lastScrollTop = st; 
	}

})