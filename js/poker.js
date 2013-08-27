(function() {
	var el = document.querySelector('h1')

	document.body.addEventListener('click', function(e) {
		var num = parseInt(el.innerHTML, 10);
		num++;

		if (num > 5) {
			num = 1;
		}

		el.innerHTML = num;
		el.dataset.level = num;
	});
}());