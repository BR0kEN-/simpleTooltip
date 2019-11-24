/**
 * @author BR0kEN <sb@firstvector.org>
 * @license MIT
 * @example
 * document
 *   .getElementById('id')
 *   .simpleTooltip();
 *
 * document
 *   .querySelectorAll('.class a')
 *   .simpleTooltip();
 *
 * jQuery('.class a').simpleTooltip();
 *
 * @namespace SimpleTooltip
 * @typedef {Object} SimpleTooltip.Options
 * @property {String} [title]
 * @property {function(element: Element): Boolean} [hideIf]
 * @property {('nw'|'north'|'ne'|'west'|'east'|'sw'|'south'|'se')} shift
 */

(function(window, document, xhr) {
  'use strict';

  if (!Array.prototype.map) {
    return;
  }

  /**
   * @param {Element} hint
   */
  function setup(hint) {
    if (hint.simpleTooltipProcessed) {
      return;
    }

    hint.simpleTooltipProcessed = true;

    var title = hint.getAttribute('title');
    var hintStyle = window.getComputedStyle(hint);

    // Allow to use the "title" as fallback.
    if (title) {
      hint.setAttribute(plugin.attrs.title, title);
      hint.removeAttribute('title');
    }

    // Replace "static" positioning by "relative".
    if (hintStyle.position.length < 7 && !/hidden/.test(hintStyle.overflow)) {
      hint.style.position = 'relative';
    }

    // Set handlers for all elements having tooltips.
    hint.addEventListener('mouseover', function() {
      if (typeof this.simpleTooltipHideIf === 'function') {
        if (this.simpleTooltipHideIf(this)) {
          this.removeAttribute(plugin.attrs.shift);

          return;
        }
        else {
          this.setAttribute(plugin.attrs.shift, this.simpleTooltipShift);
        }
      }

      // Copy content of the tooltip for width computation.
      // Width should always gets recalculated because the value
      // of the attribute might be modified.
      containers.width.innerHTML = this.getAttribute(plugin.attrs.title);

      // Remove an element from the list if its hint has an empty value.
      if (!containers.width.innerHTML) {
        this.removeAttribute(plugin.attrs.shift);

        return;
      }

      var shift = this.getAttribute(plugin.attrs.shift);
      /**
       * The width of a current tooltip.
       *
       * @type {Number}
       */
      var width = containers.width.offsetWidth;
      /**
       * CSS rules for a current tooltip.
       *
       * @type {String}
       */
      var style = '';

      // Limit the width.
      if (width > plugin.maxWidth) {
        width = plugin.maxWidth;
        style = '[' + plugin.attrs.shift + ']:before{width:' + plugin.maxWidth + 'px;white-space:normal}';
      }

      // If not "south" or "north".
      if (shift.length < 5) {
        var dimensions = this.getBoundingClientRect();
        var noPixelsAtRight = window.innerWidth - (dimensions.left + dimensions.width + 20) < plugin.maxWidth;
        var noPixelsAtLeft = dimensions.left - 20 < plugin.maxWidth;

        // Auto-positioning of the tooltip if it's wider than space to
        // the end of the window.
        if (noPixelsAtLeft || noPixelsAtRight) {
          shift = shift.length < 3
            // For "nw", "ne", "sw" and "se".
            ? shift[0] + (noPixelsAtLeft ? 'w' : (noPixelsAtRight ? 'e' : ''))
            // For "west" and "east".
            : (noPixelsAtLeft ? 'west' : (noPixelsAtRight ? 'east' : ''));
        }
      }

      // Calculate the offset if the tooltip should be aligned by the
      // middle of the element.
      if (shift.slice(-2) === 'th') {
        style += '[' + plugin.attrs.shift + '$=th]:before{margin-left:-' + ((width + 10) / 2) + 'px}';
      }

      this.setAttribute(plugin.attrs.width, width);
      this.setAttribute(plugin.attrs.shift, shift);

      // Apply styles for a current tooltip.
      containers.css.innerHTML = style;
    }, false);
  }

  /**
   * @type {Object}
   */
  var plugin = {
    shifts: ['nw', 'north', 'ne', 'west', 'east', 'sw', 'south', 'se'],
    maxWidth: 300,
    attrs: {
      shift: 'data-shift',
      width: 'data-width',
      title: 'data-title'
    },
    init: function () {
      var hints = document.querySelectorAll('[' + plugin.attrs.shift + ']');
      var i = hints.length;

      while (--i >= 0) {
        setup(hints[i]);
      }
    }
  };
  /**
   * @type {Function}
   */
  var xhrSend = xhr.prototype.send;
  /**
   * @type {Object[]}
   *
   * @typedef {function(options: SimpleTooltip.Options)} Element.simpleTooltip
   * @typedef {function(options: SimpleTooltip.Options)} NodeList.simpleTooltip
   * @typedef {function(options: SimpleTooltip.Options)} jQuery.simpleTooltip
   */
  var prototypes = [Element, NodeList, window.jQuery];
  /**
   * @type {{css: {Object}, width: {Object}}}
   */
  var containers = {
    // The DOM node for actual styles of a hint.
    css: 'style',
    // The DOM node for detecting the width of a hint.
    width: 'div'
  };

  // Create containers and initialize the tooltips.
  window.addEventListener('DOMContentLoaded', function() {
    for (var type in containers) {
      var element = document.body.appendChild(document.createElement(containers[type]));
      element.id = 'hint' + type;

      containers[type] = element;
    }

    plugin.init();
  });

  // Reinitialize the tooltips after AJAX call.
  xhr.prototype.send = function() {
    xhrSend.apply(this, arguments);
    setTimeout(plugin.init, 500);
  };

  for (var i = 0; i < prototypes.length; i++) {
    var prototype = prototypes[i];

    if (!prototype) {
      return;
    }

    /**
     * @param {SimpleTooltip.Options} options
     */
    prototype.prototype.simpleTooltip = function(options) {
      options = options || {};

      for (var i = 0, all = this.length || 1; i < all; i++) {
        var element = this[i] || this;

        try {
          options.title = options.title || element.getAttribute('title');
          options.shift = plugin.shifts[
            plugin.shifts.indexOf(options.shift || element.getAttribute(plugin.attrs.shift))
          ];
        } catch (e) {
          continue;
        }

        if (options.shift && options.title) {
          element.setAttribute(plugin.attrs.shift, options.shift);
          element.setAttribute(plugin.attrs.title, options.title);
          element.simpleTooltipHideIf = options.hideIf;
          element.simpleTooltipShift = options.shift;
          setup(element);
        }
      }
    };
  }
})(window, document, XMLHttpRequest);
