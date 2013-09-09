var dynamic = $('#dynamic');

dynamic.children().click(function(e){
	e.preventDefault();

	$.post('/examples/simpleTooltip/demo/demo.php', {hint:dynamic.attr('id')}, function(data){
		if (data != 'Hacking Attempt!') {
			dynamic.slideUp(400, function(){
				dynamic.remove();

				$('footer').before('<section role="region" class="ajax clr" hidden>'+ data +'</section>');
				$('.ajax').slideDown(999);
			});
		}
	});
});

$('a:not(footer a)').click(function(e){
	e.preventDefault();
});