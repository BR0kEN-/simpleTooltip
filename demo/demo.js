(function() {
  'use strict';

  var container = document.querySelector('.dynamic');
  var button = container.children[0];

  button.addEventListener('click', function() {
    var request = new XMLHttpRequest();

    request.open('POST', '/examples/simpleTooltip/demo/demo.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('hint=dynamic');
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        button.parentNode.removeChild(button);
        container.innerHTML += this.responseText;
      }
    };
  }, false);

  button.simpleTooltip({
    shift: 'south',
    title: 'This tooltip was assigned by means of custom method'
  });
})();
