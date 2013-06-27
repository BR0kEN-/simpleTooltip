/*!
	@Follow us on Twitter: https://twitter.com/firstvector
	@Visit our website: http://firstvector.org/
	@See information about our team: http://firstvector.org/humans.txt
*/

/**
*	@maxWidth (int) ������������ ������ ���������.
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
				*	������� ���-�� �������� �� ������� ������ ������ �� ��� (Arial, 11px).
				*/
				var width = $(this).data('title').length * 5, txt;

				/**
				*	���� ��������� �������� ����� ������, �� �� ������ ���������� �� ��������� � ���������� � � ������
				*	����������� ������ ��������������: ������������ �� ������ ���� � ���������� ������ ������.
				*/
				if (width > maxWidth) width = maxWidth, txt = 'text-align:left;line-height:17px;padding:2px 5px;';

				/**
				*	�������� � ������ ����� ������� �������� padding, �������� ������� � ������� ������� �������� �����.
				*/
				head.append('<style id="simpleTooltip">[data-tooltip]:before{width:'+ width +'px;'+ txt +'}[data-tooltip$=th]:before{margin-left:-'+ ((width + 10) / 2) +'px}</style>');

			} else $('#simpleTooltip').remove();

		});
	};
})(jQuery);

$(document).ready(function(){
	$.simpleTooltip();
});