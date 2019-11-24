(function() {
  'use strict';

  var containerDynamic = document.querySelector('.dynamic');
  var containerCustom = document.querySelector('.custom');
  var button = containerDynamic.children[0];
  var texts = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Short text',
  ];

  button.addEventListener('click', function() {
    var request = new XMLHttpRequest();

    request.open('POST', '/examples/simpleTooltip/demo/demo.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('hint=dynamic');
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        button.parentNode.removeChild(button);
        containerDynamic.innerHTML += this.responseText;
      }
    };
  }, false);

  button.simpleTooltip({
    shift: 'south',
    title: 'This tooltip was assigned programmatically!'
  });

  for (var i = 0; i < texts.length; i++) {
    var div = document.createElement('div');
    var span = document.createElement('span');

    span.className = 'ellipsis';
    span.textContent = texts[i];

    div.appendChild(span);
    containerCustom.appendChild(div);

    span.simpleTooltip({
      shift: 'south',
      title: 'Tooltip here is shown until all text is visible',
      hideIf: function(element) {
        return element.offsetWidth >= element.scrollWidth;
      }
    });
  }
})();
