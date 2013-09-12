<?php

error_reporting(E_ALL ^ E_WARNING ^ E_NOTICE);
ini_set('display_errors', true);
ini_set('html_errors', false);
ini_set('error_reporting', E_ALL ^ E_WARNING ^ E_NOTICE);

if ($_POST['hint'] == 'dynamic') {

	echo '<h2>Статические элементы c подсказками, загруженные AJAX запросом</h2>
	<div>
		<a href="#" data-hint="nw" data-title="This is an example of Northwest gravity">Northwest</a>
	</div>
	<div>
		<a href="#" data-hint="north" data-title="This is an North gravity">North</a>
	</div>
	<div>
		<a href="#" data-hint="ne" data-title="This is an example of Northeast gravity">Northeast</a>
	</div>

	<div>
		<a href="#" data-hint="west" data-title="This is an example of West gravity">West</a>
	</div>
	<div>
		<h3><a href="https://github.com/BR0kEN-/simpleTooltip" data-hint="south" data-title="Перейти к репозиторию на GitHub">simpleTooltip</a></h3>
	</div>
	<div>
		<a href="#" data-hint="east" data-title="This is an example of East gravity">East</a>
	</div>

	<div>
		<a href="#" data-hint="sw" data-title="This is an example of Southwest gravity">Southwest</a>
	</div>
	<div>
		<a href="#" data-hint="south" data-title="This is an example of South gravity">South</a>
	</div>
	<div>
		<a href="#" data-hint="se" data-title="This is an example of Southeast gravity">Southeast</a>
	</div>';

} else die('Hacking Attempt!');

?>