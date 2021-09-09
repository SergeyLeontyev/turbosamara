$(document).ready(function () {
	var overlay = $('.overlay');
	var closeOverlay = $('.popup-close');
	var btnOverlay = $('.btn-header, .btn-main, .btn-footer, .btn-about, .btn-shop');
	var noScroll = $('#no-scroll');
	
	btnOverlay.click(function () {
		overlay.toggleClass('overlay-active');
		noScroll.toggleClass('no-scroll');
	});
	
	closeOverlay.click(function () {
		overlay.removeClass('overlay-active');
		noScroll.removeClass('no-scroll');
	});
});


