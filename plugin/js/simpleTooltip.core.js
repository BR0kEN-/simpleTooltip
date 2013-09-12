/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin simpleTooltip
* @update September 12, 2013
* @version 1.5.5 Pure
*
* Global variables:
* @param (object) simpleTooltip - plugin definition.
*
* Note: The simpleTooltip object can be expanded by custom methods. The syntax
*				is identical to the jQuery. Look to STHP plugin for example.
*
* Private variables:
* @param (object) $ - alias for @simpleTooltip;
* @param (object) W - alias for window;
* @param (object) D - alias for document;
* @param (object) X - alias for XMLHttpRequest;
*/

;var simpleTooltip = {};

(function($, W, D, X){
	'use strict';

	/**
	* @const (object) CSS - HTML tag style for actual styles;
	* @const (object) TWD - DOM node for detecting width of hint;
	* @const (object) IE8 - check styleSheet property which available in IE8.
	*	In other browsers the value will be undefined.
	*/
	var CSS, TWD, IE8,

	/**
	* Function for initialize or reinitialize a plugin.
	* She's contains cycle, which will iterates on all elements which have the hint.
	*/
	init = function(){
		/**
		* @param (int) i - number of current iteration;
		* @param (object) hint - collection of elements with tooltips;
		* @param (int) total - total count of all tooltips.
		*/
		for (var i = 0, hint = D.querySelectorAll('[data-hint]'), total = hint.length; i < total; ++i) {

			/**
			* Checking the position of each an element having a
			* tooltip - set relative positioning if it is static.
			*/
			if ((IE8 ? hint[i].currentStyle : W.getComputedStyle(hint[i])).position.length < 7) {
				hint[i].style.position = 'relative';
			}

			/**
			* Setting the handlers for all elements with tooltips.
			*/
			show(hint[i], function(){

				/**
				* Post the text of tooltip from the attribute in @TWD element.
				* Thereafter set the attribute with the value of
				* tooltip width for current element.
				*/
				TWD.innerHTML = this.getAttribute('data-title');
				this.setAttribute('data-width', TWD.offsetWidth);

				/**
				* @param (int) width - width of current tooltip;
				* @param (string) style - CSS rules for current tooltip.
				*/
				var width = parseInt(this.getAttribute('data-width')), style = '';

				/**
				* Set width to 300px if she's more than and set styles to @style.
				*/
				if (width > 300) {
					width = 300,
					style = '[data-hint]:before{width:300px;white-space:normal}';
				}

				/**
				* Check availability of STHP function and apply her if she's have.
				*
				* @function STHP - needed for tooltip auto positioning when she's not fit in window.
				*/
				if (typeof $.STHP == 'function') $.STHP(this, width);

				/**
				* If tooltip must be aligned to middle of element, calculate offset by formula:
				* width + padding / 2. Then add styles that have been defined just to @style.
				*/
				if (this.getAttribute('data-hint').slice(-2) == 'th') {
					style += '[data-hint$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}';
				}

				/**
				* Applying styles to current tooltip, depending on browser.
				*/
				IE8 ? IE8.cssText = style : CSS.innerText = style;
			});
		}
	},

	/**
	* Function which will set the handler on mouseover event.
	*
	* @param (object) e - object, which receives a function;
	* @param (function) f - function, which set for event.
	*/
	show = function(e, f){
		if (D.addEventListener) e.addEventListener('mouseover', f, false);
		else e.attachEvent('onmouseover', function(){return f.call(e, W.event)});
	},

	/**
	* Creating a HTML node, appointment ID, and place him in document.
	*
	* @param (string) name - the name of HTML element;
	* @return (object) - created element in form of object.
	*/
	node = function(name){
		var e = D.body.appendChild(D.createElement(name));

		e.id = 'hint' + name;

		return e;
	};

	/**
	* Creating elements for CSS rules and calculating the width.
	* Detecting IE8 and run the init function.
	*/
	W.onload = function(){
		TWD = node('div'),
		CSS = node('style'),
		IE8 = CSS.styleSheet,
		init();
	};

	/**
	* Reinitialize plugin after AJAX query.
	*/
	var XHR = X.prototype.send;

	X.prototype.send = function(){
		setTimeout(init, 500);

		XHR.apply(this, arguments);
	};

})(simpleTooltip, window, document, XMLHttpRequest);