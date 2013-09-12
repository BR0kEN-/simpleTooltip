/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin STHP - automatic horizontal positioning for simpleTooltip
* @depend simpleTooltip (simpleTooltip.core.js)
* @update September 12, 2013
* @version 0.2.3 Pure
*/

;(function($){
	'use strict';

	/**
	* @param (jQuery) e - current element;
	* @param (int) w - width of current tooltip;
	*/
	$.STHP = function(e, w){
		/**
		* @param (int) offset - offset of an element relative to the left edge of screen;
		* @param (bool) right - will true when tooltip didn't fit in window from right side;
		* @param (bool)  left - analogical of previous option, but for left side;
		* @param (string) val - contains the value of "data-hint" attribute;
		* @param (int) 		 ln - number of letters.
		*/
		var offset 	= e.offsetLeft || e.parentNode.offsetLeft,
				right		= window.innerWidth - (offset + e.offsetWidth + 20) < w,
				left 		= offset - 20 < w,
				val 		= e.getAttribute('data-hint'),
				ln 			= val.length;

		/**
		* Checking the direction of tooltip and updating a value of attribute for
		* changing his direction in cases, when tooltip doesn't fit in window.
		*/
		if ((left || right) && ln < 5) {
			e.setAttribute('data-hint', ln < 3 ? val[0] + (left ? 'w' : right ? 'e' : '') : (left ? 'west' : right ? 'east' : ''));
		}
	};
})(simpleTooltip);