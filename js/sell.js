
$(function () {
	$('body').on('change', 'select.count', checkCount);
	
	checkCount();
});

function checkCount() {
	sum = 0;
	$('select.count').each(function(i,e){

		sum += Number( $(e).val() );
	});
	
	if( sum > 0 ){
		$('button[type="submit"]').removeAttr('disabled');
	}else{
		$('button[type="submit"]').attr('disabled','disabled');
	}
}
