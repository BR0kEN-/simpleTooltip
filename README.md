simpleTooltip
=============

**simpleTooltip** - analog or lite-version of [Tipsy Tooltip](https://github.com/jaz303/tipsy).

Most part of develop implemented on CSS, but role of controller perform a small JavaScript library.

Вenotation
-------
Why named a **simpleTooltip**?
- only **3 Kb** exhaustive code;
- works in most browsers;
- easy to use;
- compact and harmonious appearance;
- simple text prompts without additional functional;
- a JavaScript controller - is a library, which may be expanded by new plugins.

It seems to me, these items completely reveal the basic idea of develop - simplicity.

Usage
-------
Use of tooltip possible on any HTML element. To do this, you must assign couple attributes for element:
*data-hint* and *data-title*. Value of first attribute must be one of predefined words and it affects
on positioning of tooltip relative element which it's given. Context of second - text of tooltip without
any of formatting (text/plain).

Possible values for an attribute **data-hint** and their impact on shift:
- **nw** - Northwest;
- **north** - North;
- **ne** - Northeast;
- **west** - West;
- **east** - East;
- **sw** - Southwest;
- **south** - South;
- **se** - Southeast.

Why was used the JavaScript?
-------
Functions of plugin isn't numerous. Initially, performed checks positioning of all elements which have a
tooltip - it shouldn't be a static. For this reason, all non-conforming elements receive relative positioning.

Then, when you hover the mouse over an element, its width is calculated and if it not more than maximal and
tooltip don't directed to south or north, work of plugin will be stopped. Otherwise, the work will continue for
a few actions:
- width is greater maximal - tooltip gets value of maximum width and a special text formatting.
- directed on south or north - tooltip is aligned to center of element which it's assigned.

Examples for usage the simpleTooltip method
-------
````javascript
/**
 * For Element object
 */
document.getElementById('id').simpleTooltip();

/**
 * For NodeList object
 */
document.querySelectorAll('.class a').simpleTooltip();

/**
 * For jQuery object
 */
$('.class a').simpleTooltip();
````
**Remember,** parameter of `.simpleTooltip()` method must be an object and contain a two properties - *shift* & *tip*.
Value of first - direction of tooltip and it may be the only one of predefined words, which are specified
in [Usage](#usage) section. And second - is a plain text of tooltip.

Crossbrowsing
-------
- IE9+
- Chrome 2.0+
- Opera 9.0+
- Safari 3.1+
- Firefox 1.0+
- Android 1.0+
- iOS 1.0+

Changelog
-------
**Version [1.0](https://github.com/BR0kEN-/simpleTooltip/tree/v1.0)**, June 27, 2013:
- first public version with support of IE8.

**Version [1.0.1](https://github.com/BR0kEN-/simpleTooltip/tree/v1.0.1)**, June 30, 2013:
- support of IE8 was removed;
- held code refactoring;
- added minimized CSS and JS;
- rejection of *data-title* attribute in favor of a more semantically *title*.

**Version [1.5.0](https://github.com/BR0kEN-/simpleTooltip/tree/v1.5.0)**, September 5, 2013:
- fixed an [issue #4](https://github.com/BR0kEN-/simpleTooltip/issues/4);
- added the MIT license;
- added JSON manifest;
- developed horizontal auto positioning;
- modified [.gitignore](https://github.com/BR0kEN-/simpleTooltip/blob/master/.gitignore);
- [readme.md](https://github.com/BR0kEN-/simpleTooltip/blob/master/README.md) translated into english;
- to [demonstration](http://firstvector.org/simpleTooltip) was added content with tooltips, which loaded by means of AJAX\*;
- return to data-* attribute for tooltip text - tooltip & title nevertheless are different things;
- data-tooltip attribute was changed on data-hint;
- code was reduced and architecture changed;
- support of IE8 was returned.

\* HTML elements which will loaded by means of AJAX and having the tooltip must have positioning as relative or absolute.

**Version [1.5.1](https://github.com/BR0kEN-/simpleTooltip/tree/v1.5.1)**, September 9, 2013:
- fixed an [issue #5](https://github.com/BR0kEN-/simpleTooltip/issues/5);
- added strict mode to STHP;
- updated corners.htc;
- updated [demonstration](http://firstvector.org/simpleTooltip).

**Version [1.5.5](https://github.com/BR0kEN-/simpleTooltip/tree/v1.5.5)**, September 12, 2013:
- code of plugin has been ported to pure, native, javascript;
- increased a functionality of plugin at expense of refusing of jQuery;
- created a passive object for expanding the opportunities of plugin (syntax is identical to the jQuery: look to STHP plugin for example).

**Version [1.5.6](https://github.com/BR0kEN-/simpleTooltip/tree/v1.5.6)**, September 12, 2013:
- fix bug with auto positioning of tooltips, which assigned for element with absolute positioning;
- CSS has been upgraded and this allowed reduce the JS;
- updated [demonstration](http://firstvector.org/simpleTooltip).

**Version [2.0.0](https://github.com/BR0kEN-/simpleTooltip/tree/v2.0.0)**, September 13, 2013:
- revert from "data-title" to "title" attribute;
- was performed refusal to support IE8 and suppressed all errors in it;
- added a new plugin for simpleTooltip: he's needed for assigning method to elements.
[Click here, for read more about it](#examples-for-usage-the-simpletooltip-method)

**Version [2.0.1](https://github.com/BR0kEN-/simpleTooltip/tree/v2.0.1)**, November 16, 2013:
- fixed an [issue #7](https://github.com/BR0kEN-/simpleTooltip/issues/7): Gecko didn't insert the styles into the container
by innerText method and, in connection with this, it has been replaced on innerHTML.

Thank you
-------
- [Artem Kolodko (heapstore)](https://github.com/heapstore), for the [bug report #4](https://github.com/BR0kEN-/simpleTooltip/issues/4) - *July 3, 2013*.
- [Igor Bronovskyy (BrunIF)](https://github.com/BrunIF), for the [bug report #7](https://github.com/BR0kEN-/simpleTooltip/issues/7) - *November 15, 2013*.

Links
-------
- **Demonstration:** http://firstvector.org/simpleTooltip
- **Presentational publication (ru):** http://habrahabr.ru/post/185110/