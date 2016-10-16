
$(function () {
	$(window).on('load resize', setTableHeight);
});

function setTableHeight() {
	td = $('.nav-progress-mobile .icons td');
	w = td.first().width();
	if (td.first().height() < w) {
		td.first().height(w);
	}
}