/**
 * Follow us on Twitter: https://twitter.com/firstvector
 * Visit our website: http://firstvector.org/
 * See information about our team: http://firstvector.org/humans.txt
 *
 * @author BR0kEN, Firstvector.org
 * @update January 26, 2014
 * @version 2.0.2
 * @license MIT [https://raw2.github.com/BR0kEN-/simpleTooltip/master/LICENCE]
 *
 * Global variables:
 * @param (object) simpleTooltip - plugin definition.
 *
 * Note: The simpleTooltip object can be expanded by custom methods. The syntax
 *        is identical to the jQuery. Look to STHP plugin for example.
 *
 * Private variables:
 * @param (object) $ - alias for @simpleTooltip;
 * @param (object) W - alias for window;
 * @param (object) D - alias for document;
 * @param (object) X - alias for XMLHttpRequest;
 */

var simpleTooltip = {
  shift: ['nw', 'north', 'ne', 'west', 'east', 'sw', 'south', 'se']
};

(function($, W, D, X) {
  'use strict';

  if (!Array.prototype.map) {
    return;
  }

  /**
   * @const (object) CSS - HTML tag style for actual styles.
   */
  var CSS,

      /**
       * @const (object) TWD - DOM node for detecting width of hint.
       */
      TWD,

      /**
       * Creating a HTML node, appointment ID, and place him in document.
       *
       * @param (string) name - the name of HTML element;
       * @return (object) - created element in form of object.
       */
      node = function(name) {
        var e = D.body.appendChild(D.createElement(name));
        e.id = 'hint' + name;

        return e;
      };

  /**
   * Function for initialize or reinitialize a plugin.
   * She's contains cycle, which will iterates on all elements which have the hint.
   */
  $.init = function() {
    /**
     * @param (object) hint - collection of elements with tooltips.
     */
    var hint = D.querySelectorAll('[data-hint]'),

        /**
         * @param (int) i - total count of all tooltips.
         */
        i = hint.length;

    while (--i >= 0) {
      var self = hint[i],
          title = self.getAttribute('title');

      if (title) {
        self.setAttribute('data-title', title);
        self.removeAttribute('title');
      }

      /**
       * Checking the position of each an element having a
       * tooltip - set relative positioning if it is static.
       */
      if (W.getComputedStyle(self).position.length < 7) {
        self.style.position = 'relative';
      }

      /**
       * Setting the handlers for all elements with tooltips.
       */
      self.addEventListener('mouseover', function() {
        /**
         * Post the text of tooltip from the attribute in @TWD element.
         * Thereafter set the attribute with the value of
         * tooltip width for current element.
         */
        TWD.innerHTML = this.getAttribute('data-title');

        if (!TWD.innerHTML) {
          this.removeAttribute('data-hint');

          return;
        }

        this.setAttribute('data-width', TWD.offsetWidth);

        /**
         * @param (int) width - width of current tooltip;
         * @param (string) style - CSS rules for current tooltip.
         */
        var width = parseInt(this.getAttribute('data-width')),
            style = '';

        /**
         * Set width to 300px if she's more than and set styles to @style.
         */
        if (width > 300) {
          width = 300,
          style = '[data-hint]:before{width:300px;white-space:normal}';
        }

        /**
         * Check availability of STHP function and apply her if she's have.
         *
         * @function STHP - needed for tooltip auto positioning when she's not fit in window.
         */
        if (typeof $.STHP == 'function') {
          $.STHP(this, width);
        }

        /**
         * If tooltip must be aligned to middle of element, calculate offset by formula:
         * width + padding / 2. Then add styles that have been defined just to @style.
         */
        if (this.getAttribute('data-hint').slice(-2) == 'th') {
          style += '[data-hint$=th]:before{margin-left:-' + ((width + 10) / 2) + 'px}';
        }

        /**
         * Applying styles for current tooltip.
         *
         * @since 2.0.1
         */
        CSS.innerHTML = style;
      }, false);
    }
  };

  /**
   * Creating elements for CSS rules and calculating
   * the width, and run the init function.
   */
  W.onload = function() {
    TWD = node('div'),
    CSS = node('style'),
    $.init();
  };

  /**
   * Reinitialize plugin after any AJAX query.
   */
  var XHR = X.prototype.send;

  X.prototype.send = function() {
    setTimeout($.init, 100);

    XHR.apply(this, arguments);
  };

  /**
   * @since 2.0.2
   *
   * Use method for dynamic assigning the tooltips for any elements.
   *
   * @param (object) options - object, contains the required parameters
   * - shift - one of predefined values, impacting on position of tooltip relative to element;
   * - tip - text of tooltip.
   *
   * One of param if required!
   *
   * Note: tooltip will not work, if a value of param will not be one of predefined words.
   *
   * Examples for usage:
   * - document.getElementById('id').simpleTooltip(<params>);
   * - document.querySelectorAll('.class a').simpleTooltip(<params>);
   * - $('.class a').simpleTooltip(<params>);
   */
  (function() {
    for (var i = 0; i < arguments.length; ++i) {
      (function(Node) {
        if (!Node) {
          return;
        }

        Node.prototype.simpleTooltip = function(options) {
          if (!options) {
            return;
          }

          for (var i = 0, all = this.length || 1; i < all; ++i) {
            var self = this[i] || this;

            try {
              options.shift = $.shift[$.shift.indexOf(options.shift)];
              options.tip = options.tip || self.getAttribute('title');
            } catch (e) {
              continue;
            }

            if (options.shift && options.tip) {
              self.setAttribute('data-hint', options.shift);
              self.setAttribute('title', options.tip);
            }
          }
        };
      })(arguments[i]);
    }
  })(Element, NodeList, W.jQuery);
})(simpleTooltip, window, document, XMLHttpRequest);
