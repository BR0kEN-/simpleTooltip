/*!
	@Follow us on Twitter: https://twitter.com/firstvector
	@Visit our website: http://firstvector.org/
	@See information about our team: http://firstvector.org/humans.txt
*/

/**
*	@maxWidth (int) максимальная ширина подсказки.
*/
(function(){
	$.simpleTooltip = function(a){
		var maxWidth = a ? a : 300, head = $('head');

		$('[data-tooltip]').each(function(){

			t = $(this);

			t.css('position') == 'static' ? t.css('position', 'relative') : !1;

		}).on('mouseenter mouseleave', function(e){

			if (e.type === 'mouseenter') {

				/**
				*	Умножим кол-во символов на среднюю ширину одного из них (Arial, 11px).
				*/
				var width = $(this).data('title').length * 5, txt;

				/**
				*	Если подсказка содержит много текста, то ее ширина обрезается до указанной в настройках и к тексту
				*	применяется особое форматирование: выравнивание по левому краю и уменьшение высоты строки.
				*/
				if (width > maxWidth) width = maxWidth, txt = 'text-align:left;line-height:17px;padding:2px 5px;';

				/**
				*	Прибавим к ширине сумму боковых значений padding, разделим пополам и получим единицу смещения влево.
				*/
				head.append('<style id="simpleTooltip">[data-tooltip]:before{width:'+ width +'px;'+ txt +'}[data-tooltip$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}</style>');

			} else $('#simpleTooltip').remove();

		});
	};
})(jQuery);

$(document).ready(function(){
	$.simpleTooltip();
});