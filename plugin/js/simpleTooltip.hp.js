/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin STHP - automatic horizontal positioning for SimpleTooltip.
* @depend SimpleTooltip (simpleTooltip.core.js)
* @update September 9, 2013
* @version 0.2.2
*
* @param (jQuery) e - current element.
* @param (int) w - width of current tooltip.
*/

;(function($){
	'use strict';

	$.STHP = function(e, w){
		var offset  = e.offset().left,
			right   = $(window).width() - (offset + e.width() + 20) < w,
			left 	= offset - 20 < w,
			val 	= e.data('hint');

		if (left || right) {

			if (val.length != 5) {
				e.attr('data-hint', val.length == 2 ? val[0] + (left ? 'w' : right ? 'e' : '') : (left ? 'west' : right ? 'east' : ''));
			}

		} else e.attr('data-hint', val);
	};
})(jQuery);