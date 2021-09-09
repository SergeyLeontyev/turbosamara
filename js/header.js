$(window).scroll(function(){
	if ($(window).scrollTop() > 345) {
					$('.header').addClass('header-fixed');
					$('.header-block__contacts').addClass('header-block__contacts-hidden');
	}
	else {
					$('.header').removeClass('header-fixed');
					$('.header-block__contacts').removeClass('header-block__contacts-hidden');
	}
});