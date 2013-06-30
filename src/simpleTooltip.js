/*!
 Follow us on Twitter: https://twitter.com/firstvector
 Visit our website: http://firstvector.org/
 See information about our team: http://firstvector.org/humans.txt
 */

(function(){
	/**
	 * @param a (int) max width of tooltip.
	 * @returns {boolean}
	 */
	$.simpleTooltip = function(a){
		if (!/msie 8/.test(navigator.userAgent.toLowerCase())) {
			var max = a ? a : 300,
				body = $('body');

			$('[data-tooltip]').each(function(){
				var $t = $(this);

				$t.attr('data-title', this.title).removeAttr('title');

				if ($t.css('position') == 'static') {
					$t.css('position', 'relative');
				}

			}).on('mouseenter mouseleave', function(e){
					if (e.type == 'mouseenter') {
						var $t = $(this);

						body.append('<div id="tooltip_width">'+ $t.data('title') +'</div>');

						var width = $('#tooltip_width').width(),
							styles = '';

						if (width > max) {
							width = max,
								styles = '[data-tooltip]:before{width:'+ width +'px;text-align:left;line-height:17px;padding:2px 5px;white-space:normal}';
						}

						if ($t.data('tooltip').slice(-2) == 'th') {
							styles += '[data-tooltip$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}';
						}

						if (styles) {
							body.append('<style id="tooltip_style">'+ styles +'</style>');
						}
					} else {
						$('#tooltip_style, #tooltip_width').remove();
					}
				});
		} else {
			return !1;
		}
	};
})(jQuery);

$(document).ready(function(){
	$.simpleTooltip();
});