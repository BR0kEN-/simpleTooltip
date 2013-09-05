var dynamic = $('#dynamic');

dynamic.children().click(function(e){
	e.preventDefault();

	$.post('/examples/simpleTooltip/demo/demo.php', {hint:dynamic.attr('id')}, function(data){
		if (data != 'Hacking Attempt!') {
			dynamic.slideUp(400, function(){
				dynamic.remove();

				$('footer').before('<section role="region" class="ajax clr" style="display: none;">'+ data +'</section>');
				$('.ajax').slideDown(400);
			});
		}
	});
});

$('a').click(function(e){
	e.preventDefault();
});