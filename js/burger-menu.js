$(document).ready(function () {
	var link = $('.burger-menu');
	var menu = $('.header-block__nav');
	var menuNav = $('.header-nav__li a');
	var noScroll = $('#no-scroll');


	link.click(function () {
		link.toggleClass('burger-menu-active');
		menu.toggleClass('header-block__nav-active');
		noScroll.toggleClass('no-scroll');
	});
	menuNav.click(function () {
		link.removeClass('burger-menu-active');
		menu.removeClass('header-block__nav-active');
		noScroll.removeClass('no-scroll');
	});
});





const mediaQuery = window.matchMedia('(max-width: 991px)');
var header = document.querySelector('.header');

	if (mediaQuery.matches) {
		document.querySelector('.header-block__nav').style.height = ('calc(100vh - ' + header.offsetHeight + 'px)');
		
			window.addEventListener('scroll', () => {
				document.querySelector('.header-block__nav').style.height = ('calc(100vh - ' + header.offsetHeight + 'px)');
			})
	} else{
		document.querySelector('.header-block__nav').style.height;
	}
		