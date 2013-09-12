/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin simpleTooltip method for any element
* @depend simpleTooltip (simpleTooltip.core.js)
* @update September 13, 2013
* @version 0.0.8 Pure
*
* Use method for dynamic assigning the tooltips for any elements.
*
* @param (object) options - object, contains the required parameters
* - shift - one of predefined values, impacting on position of tooltip relative to element;
* - tip - text of tooltip.
*
* Note: tooltip will not work, if a value of param will not be one of predefined words.
*
* Examples for usage:
* - document.getElementById('id').simpleTooltip();
* - document.querySelectorAll('.class a').simpleTooltip();
* - $('.class a').simpleTooltip();
*/

Array.prototype.map.call([Element, NodeList, jQuery], function(Node){
	Node.prototype.simpleTooltip = function(options){
		if ((['nw', 'north', 'ne', 'west', 'east', 'sw', 'south', 'se'].indexOf(options.shift) || options.tip.length) < 0) return;

		for (var i = 0, all = this.length || 1; i < all; ++i) {
			(this[i] || this).setAttribute('data-hint', options.shift);
			(this[i] || this).setAttribute('data-title', options.tip);
		}
	};
});