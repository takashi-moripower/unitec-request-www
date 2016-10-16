
$(function () {
	$(window).on('load resize', setSideHeight);
});

function setSideHeight() {
	height = $('#wrap').height();
	if ($('.container').height() < height) {
		$('.container').height(height);
	}
	if ($('.left-nav').outerHeight() < height) {
		$('.left-nav').outerHeight(height);
	}
	if ($('.right-main').outerHeight() < height) {
		$('.right-main').outerHeight(height);
	}
}
