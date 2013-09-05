/**
* Follow us on Twitter: https://twitter.com/firstvector
* Visit our website: http://firstvector.org/
* See information about our team: http://firstvector.org/humans.txt
*
* @author BR0kEN, Firstvector.org
* @plugin SimpleTooltip
* @depend jQuery
* @update September 5, 2013
* @version 1.5.0
*
* @const (jQuery object) CSS - HTML tag style for actual styles.
* @const (jQuery object) TWD - DOM node for detecting width of hint.
* @param (jQuery object) t - always contains jQuery this for current hint.
* @param (jQuery object) body - document "body" node.
*
* Note: elements, contain tooltip, which been added to document by
* means of ajax, must be a relative or absolute positioning.
*/

;(function($){
	'use strict';

	var CSS, TWD, body;

	$(document).ready(function(){
		body = $(this.body).append('<div id="hint_width" /><style id="hint_style" />'), TWD = $('#hint_width'), CSS = $('#hint_style');

		$('[data-hint]').each(function(){
			var t = $(this);

			if (t.css('position').length < 7) t.css('position', 'relative');
		});

	}).on('mouseenter', '[data-hint]', function(){

		var t = $(this), width = t.data('width') || t.data('width', TWD.html(t.data('title')).width()).data('width'), style = '';

		if (width > 300) {
			width = 300,
			style = '[data-hint]:before{width:'+ width +'px;text-align:left;line-height:17px;padding:2px 5px;white-space:normal;}';
		}

		if ($.isFunction($.STHP)) $.STHP(t, width);

		if (t.data('hint').slice(-2) == 'th') style += '[data-hint$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}';

		if (/msie 8/i.test(navigator.userAgent)) {

			$('#iest').remove();

			body.append('<style id="iest">'+ style +'</style>');

		} else CSS.html(style);

	});
})(jQuery);