/**
 * Follow us on Twitter: https://twitter.com/firstvector
 * Visit our website: http://firstvector.org/
 * See information about our team: http://firstvector.org/humans.txt
 *
 * @author BR0kEN, Firstvector.org
 * @plugin simpleTooltip
 * @update November 16, 2013
 * @version 2.0.1 Pure
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

	$.exit = !Array.prototype.map;

	if ($.exit) return;

	/**
	 * @const (object) CSS - HTML tag style for actual styles;
	 * @const (object) TWD - DOM node for detecting width of hint;
	 */
	var CSS, TWD,

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

			if (hint[i].getAttribute('title')) {

				hint[i].setAttribute('data-title', hint[i].getAttribute('title'));
				hint[i].removeAttribute('title');

			}

			/**
			 * Checking the position of each an element having a
			 * tooltip - set relative positioning if it is static.
			 */
			if (W.getComputedStyle(hint[i]).position.length < 7) {
				hint[i].style.position = 'relative';
			}

			/**
			 * Setting the handlers for all elements with tooltips.
			 */
			hint[i].addEventListener('mouseover', function(){

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
				 * Applying styles for current tooltip.
				 *
				 * @since 2.0.1
				 */
				CSS.innerHTML = style;
			}, false);
		}
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
	 * Creating elements for CSS rules and calculating
	 * the width, and run the init function.
	 */
	W.onload = function(){
		TWD = node('div'),
		CSS = node('style'),
		init();
	};

	/**
	 * Reinitialize plugin after any AJAX query.
	 */
	var XHR = X.prototype.send;

	X.prototype.send = function(){
		setTimeout(init, 500);

		XHR.apply(this, arguments);
	};

})(simpleTooltip, window, document, XMLHttpRequest);