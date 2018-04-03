# simpleTooltip

**simpleTooltip** - the analogue or a lite-version of [Tipsy Tooltip](https://github.com/jaz303/tipsy).

Most part of the development is implemented in CSS, but the role of controller performs a small JavaScript library.

## Features

- Only **3 Kb** of exhaustive code.
- Works in most browsers.
- Easy to use.
- Compact and harmonious appearance.
- Simple text prompts without additional complexity.

## Usage

Use of tooltip is possible on any HTML element. Just add the `data-shift` and `data-title` attributes to it. Value of the first one must be a predefined word that affects the positioning of a tooltip relative to the element to which it's given. The second - text of a tooltip (markup isn't supported).

Possible values for the `data-shift` and their impact on a shift:

| Value | Tooltip direction |
| ----- | ----------------- |
| nw    | Northwest         |
| north | North             |
| ne    | Northeast         |
| west  | West              |
| east  | East              |
| sw    | Southwest         |
| south | South             |
| se    | Southeast         |

### Examples

````javascript
var params = {
    shift: 'west',
    title: 'Some text for displaying'
};

/**
 * For {Element}.
 */
document.getElementById('id').simpleTooltip(params);

/**
 * For {NodeList}.
 */
document.querySelectorAll('.class a').simpleTooltip(params);

/**
 * For {jQuery}.
 */
jQuery('.class a').simpleTooltip(params);
````

**Note**, the parameter to `.simpleTooltip()` must be an object that might contain `shift` and/or `title`. You can reimburse lack of parameters by setting them as attributes to HTML element (`data-shift` and/or `data-title` or `title`).

Examples with incomplete list of parameters:

````html
<span title="Some value"></span>
<script>
  document
    .querySelectorAll('span')
    .simpleTooltip({shift: 'south'});
</script>

<!-- CSS class is used only for example. -->
<div class="set-tooltip" data-shift="west"></div>
<script>
  document
    .querySelectorAll('.set-tooltip')
    .simpleTooltip({title: 'Some nice text'});
</script>
````

## Why JavaScript is needed?

Functions of the plugin aren't numerous. Initially performs a check for positioning the elements that have a tooltip - it shouldn't be static. For this reason, all non-conforming elements receive `relative` positioning.

When you hover the mouse over an element, its width gets calculated. If it's not more than maximal and tooltip not directed to south or north - plugin will do nothing more, otherwise:
- width is greater than maximal - tooltip gets a value of maximum width and a special text formatting.
- directed to south or north - the tooltip will be aligned to the center of an element.

## Crossbrowsing

- IE 9+
- Chrome 2.0+
- Opera 9.0+
- Safari 3.1+
- Firefox 1.0+
- Android 1.0+
- iOS 1.0+
