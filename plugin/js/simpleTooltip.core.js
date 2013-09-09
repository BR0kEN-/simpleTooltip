/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin SimpleTooltip
* @depend jQuery
* @update September 9, 2013
* @version 1.5.1
*
* Global (plugin context) variables:
* @param (jQuery) body - document "body" node.
* @const (jQuery) CSS  - HTML tag style for actual styles.
* @const (jQuery) TWD  - DOM node for detecting width of hint.
*
* Variables of general purpose:
* @param (jQuery) t - always contains "this" for one of jQuery methods.
*/

;(function($){
	'use strict';

	var body, CSS, TWD;

	$(document).on('ready ajaxSuccess', function(e){
		/**
		* Checking state of DOM.
		*/
		var ready = e.type == 'ready';

		/**
		* Append div to body for calculate width of tooltip
		* and style - for applying styles for current hint.
		*
		* Then save jQuery object in appropriate variables.
		*/
		if (ready) {
			body = $(this.body).append('<div id="hint_width" /><style id="hint_style" />'),
			TWD  = $('#hint_width'),
			CSS  = $('#hint_style');
		}

		/**
		* Run cycle on all elements with hint and check positioning
		* of each. Set relative positioning if it is static.
		*
		* Note: cycle will start instantly on DOM ready state, but after
		* successful AJAX call his start will postponed on half a second
		* which needed for appending new elements in DOM (if it is).
		*/
		setTimeout(function(){
			$('[data-hint]').each(function(){
				var t = $(this);

				if (t.css('position').length < 7) t.css('position', 'relative');
			});
		}, ready ? 0 : 500);

	/**
	* @param (int) width - 	check availability of data-width attribute.
	* 						In the absence of attribute the following will occur:
	*						in node which has been saved to @TWD, will be placed
	*						a text of tooltip and then be calculated width of him.
	*
	* @param (string) style - accumulation of CSS rules for applying to this tooltip.
	*/
	}).on('mouseenter', '[data-hint]', function(){

		/**
		* Action on hover to element with tooltip.
		*/
		var t 	  = $(this),
			width = t.data('width') || t.data('width', TWD.html(t.data('title')).width()).data('width'),
			style = '';

		/**
		* Set width to 300px if she's more than and set styles to @style.
		*/
		if (width > 300) {
			width = 300,
			style = '[data-hint]:before{width:'+ width +'px;text-align:left;line-height:17px;padding:2px 5px;white-space:normal;}';
		}

		/**
		* Check availability of STHP function and apply her if she's have.
		*
		* @function STHP - needed for tooltip auto positioning when she's not fit in window.
		*/
		if ($.isFunction($.STHP)) $.STHP(t, width);

		/**
		* If tooltip must be aligned to middle of element, calculate offset by formula:
		* width + padding / 2. Then add styles that have been defined just to @style.
		*/
		if (t.data('hint').slice(-2) == 'th') style += '[data-hint$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}';

		/**
		* IE8 doesn't support applying styles which been added to existing "style"
		* element. For this reason, on hover on each element with tooltip, styles
		* for it will be inserted everytime and before this, outdated element will
		* be deleted.
		*
		* In all other cases styles will be placed to existing element
		* which has been saved in @CSS variable and then be applied.
		*/
		if (/msie 8/i.test(navigator.userAgent)) {

			$('#iest').remove();

			body.append('<style id="iest">'+ style +'</style>');

		} else CSS.html(style);

	});
})(jQuery);