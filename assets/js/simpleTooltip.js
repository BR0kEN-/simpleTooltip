/*!
	Follow us on Twitter: https://twitter.com/firstvector
	Visit our website: http://firstvector.org/
	See information about our team: http://firstvector.org/humans.txt
*/

/**
*	@max (int) max width of tooltip.
*/
(function(){
	$.simpleTooltip = function(a){
		var max = a ? a : 300, body = $('body');

		$('[data-tooltip]').each(function(){

			t = $(this);

			t.css('position') == 'static' ? t.css('position', 'relative') : !1;

		}).on('mouseenter mouseleave', function(e){

			if (e.type == 'mouseenter') {

				t = $(this);

				body.append('<div id="tooltip_width">'+ t.data('title') +'</div>');

				width = $('#tooltip_width').width(), styles = '';

				if (width > max) width = max, styles = '[data-tooltip]:before{width:'+ width +'px;text-align:left;line-height:17px;padding:2px 5px;white-space:normal}';
				if (t.data('tooltip').slice(-2) == 'th') styles += '[data-tooltip$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}';
				if (styles) body.append('<style id="tooltip_style">'+ styles +'</style>');

			} else $('#tooltip_style, #tooltip_width').remove();

		});
	};
})(jQuery);

$(document).ready(function(){
	$.simpleTooltip();
});