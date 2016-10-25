
$(function () {
	$('body').on('change', 'select.count', checkCount);
	
	checkCount();
});

function checkCount() {
	sum = 0;
	$('select.count').each(function(i,e){
		
		check = $(e).parents('tr').find('th.check');
		
		val = $(e).val();
		if( val >= 1 ){
			check.html('<i class="fa fa-check-square-o fa-fw fa-2x"></i>');
		}else{
			check.html('<i class="fa fa-square-o fa-fw fa-2x"></i>');
		}

		sum += Number( val );
	});
	
	if( sum > 0 ){
		$('button[type="submit"]').removeAttr('disabled');
	}else{
		$('button[type="submit"]').attr('disabled','disabled');
	}
}
