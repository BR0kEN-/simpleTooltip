<?php

if (!isset($_POST['hint']) || $_POST['hint'] !== 'dynamic') {
  exit('Go away.');
}
?>

<h2>Static elements with tooltips, received via AJAX call</h2>

<div>
  <a href="#" data-shift="nw" data-title="This is an example of Northwest gravity">Northwest</a>
</div>
<div>
  <a href="#" data-shift="north" data-title="This is an North gravity">North</a>
</div>
<div>
  <a href="#" data-shift="ne" data-title="This is an example of Northeast gravity">Northeast</a>
</div>

<div>
  <a href="#" data-shift="west" data-title="This is an example of West gravity">West</a>
</div>
<div style="visibility: hidden;"></div>
<div>
  <a href="#" data-shift="east" data-title="This is an example of East gravity">East</a>
</div>

<div>
  <a href="#" data-shift="sw" data-title="This is an example of Southwest gravity">Southwest</a>
</div>
<div>
  <a href="#" data-shift="south" data-title="This is an example of South gravity">South</a>
</div>
<div>
  <a href="#" data-shift="se" data-title="This is an example of Southeast gravity">Southeast</a>
</div>

<?php

header('Access-Control-Allow-Origin: *');
