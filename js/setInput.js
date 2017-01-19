function setInput(data) {
	if (!data) {
		return;
	}

	$.each(data, function (key, value) {
		$("input[name='" + key + "'][type!='hidden']").val(value);
		$("textarea[name='" + key + "']").val(value);
		$("select[name='" + key + "']").val(value);

		switch (key) {
			case 'access':
				$("input[type='checkbox'][name='access[]']").val(value);
				break;

			case 'date':
				$("select[name='date[year]']").val(value['year']);
				$("select[name='date[month]']").val(value['month']);
				break;
		}
	});
}
