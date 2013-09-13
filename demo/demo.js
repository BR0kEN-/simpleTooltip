;(function(D){
	'use strict';

	var dynamic = D.querySelector('.dynamic'),

	send = dynamic.children[0],

	click = function(){
		var XHR = new XMLHttpRequest;

		XHR.open('POST', '/examples/simpleTooltip/demo/demo.php', !0);
		XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		XHR.send('hint=dynamic');
		XHR.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				send.parentNode.removeChild(send);

				dynamic.innerHTML += this.responseText;
			}
		};
	};

	if (D.addEventListener) send.addEventListener('click', click, !1);
	else send.attachEvent('onclick', function(){return click.call(send, window.event)});

	send.simpleTooltip({shift:'south', tip:'This tooltip was assigned by means of custom method'});

})(document);