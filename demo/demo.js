(function() {
	'use strict';

	var dynamic = document.querySelector('.dynamic'),
			send = dynamic.children[0];

	send.addEventListener('click', function(){
		var XHR = new XMLHttpRequest;

		XHR.open('POST', '/examples/simpleTooltip/demo/demo.php', true);
		XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		XHR.send('hint=dynamic');
		XHR.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				send.parentNode.removeChild(send);
				dynamic.innerHTML += this.responseText;
			}
		};
	}, false);

	send.simpleTooltip({shift:'south', tip:'This tooltip was assigned by means of custom method'});
})();