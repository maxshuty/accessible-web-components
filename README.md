# Simple Range

A simple, lightweight (13kb), responsive, customizeable, extensible, & accessible range selector!

With Simple Range you can easily create multiple extensible & accessible range selectors on a page, and you don't even have to worry about event listeners not getting cleaned up because it will handle all of that for you!

### Accessibility Statement

This component was designed with accessibility in mind. It was also developed to be extremely flexible and reusable, that means you could easily break accessibility by doing things like making the fonts too small, altering focus states, and so on. Use due diligence when altering the component to ensure you're still accessible with the custom options you apply to it!

 This also by no means guarantees that it is fully accessible as accessibility requirements are ever evolving, so if you notice any issues at all regarding accessibility of this component we implore you to [submit an issue](https://github.com/maxshuty/accessible-web-components/issues).

## Demo

View the demo with many examples [here](https://maxshuty.github.io/accessible-web-components/)

## Usage is super simple:

Use the minified file from this repo and insert it as a script tag on your page:

```
<script type="text/javascript" src="your-path/simpleRange.min.js"></script>
```

In your HTML/template:

```
<range-selector min-range="0" max-range="1000" />
```

You can capture the data from the range selector when the user changes it like this:

```
window.addEventListener('range-changed', (e) => {
  const data = e.detail;
  // data = { sliderId: null, minRangeValue: 0, maxRangeValue: 1000 }
});
```

## Required props:

| Parameter   | Alt Name | Type | Values                           | Required |
| :---------- | :------- | :--- | :------------------------------- | :------: |
| `min-range` | `min`    | int  | The minimum range for the slider |   Yes    |
| `max-range` | `max`    | int  | The maximum range for the slider |   Yes    |

## Non-required props and their defaults:

| Parameter                        | Type    | Values                                                                                                                                                                                                                       |                         Default                          |
| :------------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------: |
| `id`                             | string  | If provided when the range is changed the range-changed event will include the ID of the slider (useful when there are more than one)                                                                                        |                          `null`                          |
| `preset-min`                     | int     | If provided then the min range slider will automatically be set to this number                                                                                                                                               |                          `null`                          |
| `preset-max`                     | string  | If provided then the max range slider will automatically be set to this number                                                                                                                                               |                          `null`                          |
| `number-of-legend-items-to-show` | int     | Number of legend items to show below the slider                                                                                                                                                                              |                           `2`                            |
| `min-label`                      | string  | Accessibility label for the minimum value label                                                                                                                                                                              |                       `'Minimum'`                        |
| `max-label`                      | string  | Accessibility label for the maximium value label                                                                                                                                                                             |                       `'Maximum'`                        |
| `event-name-to-emit-on-change`   | string  | The event name that will be emitted when the user adjusts the range. I.e. window.addEventListener('my-custom-range-changed-event-name-here', () => doStuff()                                                                 |                     `range-changed`                      |
| `inputs-for-labels`              | boolean | Whether or not to use inputs instead of labels so that the user can manually type in the range. Simply add the `inputs-for-labels` attribute for this to work (truth is inferred by the presence of this attribute existing) |                         `false`                          |
| `hide-label`                     | boolean | Whether or not to hide the label. Simply add the `hide-label` attribute for this to work (truth is inferred by the presence of this attribute existing)                                                                      |                         `false`                          |
| `hide-legend`                    | boolean | Whether or not to hide the legend. Simply add the `hide-legend` attribute for this to work (truth is inferred by the presence of this attribute existing)                                                                    |                         `false`                          |
| `slider-color`                   | string  | An awesome[red]sauce color (pun intended)                                                                                                                                                                                    |
| `circle-border`            | string  | The CSS border property of the circle                                                                                                                                                                                     |                     `1px solid {circle-border-color}` and if `circle-border-color` is not provided it defaults to `1px solid #8b8b8b`                   |  
| `circle-focus-border`            | string  | The CSS focus border property of the circle                                                                                                                                                                                     |                     `2px solid {circle-focus-border-color}` and if `circle-focus-border-color` is not provided it defaults to `2px solid #0074cc`                   |                         `tomato`                         |
| `circle-color`                   | string  | The color of the slider circles                                                                                                                                                                                              |                    `#ffffff` (white)                     |
| `circle-border-color`            | string  | The border color of the slider circles                                                                                                                                                                                       |                     `#8b8b8b` (grey)                     |
| `circle-focus-border-color`      | string  | The focus border color of the slider circles (for accessibility). This should have proper contrast with the other colors you have selected or else it may fail accessibility requirements                                  | `#0074cc` (Similar to Chromes default blue focus border) |
| `circle-size`            | string  | The size of the circle sliders. _Note: The size of the range line automatically adjusts based on the height of the slider circles. If you have a use case where you need this to be independent please submit an [Issue](https://github.com/maxshuty/accessible-web-components/issues)_                                                                                                                                                                                     |                     `20px`                   |
| `label-font-weight`             | string  | The font weight of the labels                                                                                                                                                                                                |                          `bold`                          |
| `label-font-size`               | string  | The font size of the labels                                                                                                                                                                                                  |                          `16px`                          |
| `label-before`             | string  | Adds whatever content is passed in as CSS `::before` content like `.my-class::before { content: '$' }`                                                                                                                                                                                                |                          `''`                          |
| `label-after`               | string  | Adds whatever content is passed in as CSS `::after` content like `.my-class::after { content: '$' }`                                                                                                                                                                                                 |                          `''`                          |


## Resetting the slider to its initial state

In some circumstances you may want to reset the slider to it's initial state. This can easily be achieved by simply emitting a `range-changed` event.

Here is how that can be accomplished using a `CustomEvent`:

```
window.dispatchEvent(new CustomEvent('range-reset', {
      bubbles: true,
      composed: true,
      detail: { sliderId: 'sliderIdHere' }
    }
  )
);
```

**NOTE:** If you do not provide a `sliderId` in the `event.detail` it will reset **all** sliders on the page if you have multiple of them. If you provide a `sliderId` then it will only reset the specific slider that you specify in the `sliderId`.

## Alternatively you can easily customize colors and other options like these examples:

Using an ID using `id` so that it will be emitted on the `range-changed` event and using `min-label` and `max-label` for accessibility. Also using `number-of-legend-items-to-show` to show 6 values below the slider:

```
<range-selector
  id="yearSelector"
  min-label="Minimum"
  max-label="Maximum"
  min-range="1000"
  max-range="2022"
  number-of-legend-items-to-show="6"
/>
```

You can adjust the number of legend items to show and you can also
use the shorthand `min` & `max` instead of `min-range` and `max-range`:

```
<range-selector
  min-label="Minimum"
  max-label="Maximum"
  min="99"
  max="999"
  number-of-legend-items-to-show="4"
  hide-label
/>
```

You can set the preset values for the min and max easily using `preset-min` and `preset-max`:

```
<range-selector
  min-label="Minimum"
  max-label="Maximum"
  min="99"
  max="999"
  preset-min="350"
  preset-max="800"
  number-of-legend-items-to-show="4"
/>
```

Using a custom range changed event name using `event-name-to-emit-on-change` so that your consumer
of this component can listen for this specific event name when
the user has adjusted the ranges:

```
<range-selector
  min-range="1092"
  max-range="2022"
  min-label="i18nMinLabel"
  max-label="i18nMaxLabel"
  id="yearRangeSelector"
  event-name-to-emit-on-change="my-custom-range-changed-event"
/>
```

Hiding the legend using `hide-legend`:

```
<range-selector
  min-label="i18nLabel"
  max-label="i18nLabel"
  min-range="5"
  max-range="100"
  number-of-legend-items-to-show="6"
  hide-legend
/>
```

Hiding the legend and the label using `hide-legend` and `hide-label`:

```
<range-selector
  min-label="i18nLabel"
  max-label="i18nLabel"
  min-range="5"
  max-range="100"
  number-of-legend-items-to-show="6"
  hide-legend
  hide-label
/>
```

Altering the colors of the slider, slider circle, and accessibility focus color using `slider-color`, `circle-color`, `circle-border-color`, and `circle-focus-border-color`. Any valid CSS color, hex, etc will work:

```
<range-selector
  min-label="Minimum Range"
  max-label="Maximum Range"
  min-range="5"
  max-range="100"
  slider-color="orange"
  circle-color="lightblue"
  circle-border-color="tomato"
  circle-focus-border-color="lime"
/>
```

The `min-label` and `max-label`'s are attributes so that they can be translated by the consumer and passed in with the proper language (i18n capable).

They are to used for accessibility and screen readers and **if you want this to be accessible then it is mandatory to set these labels**, they will default to _"Minimum"_ and _"Maximum"_ in English only!

## Contributions

Contributions are always welcome! Simply fork this repo and submit a PR.

Found a bug or want a new feature? Create an issue or a feature request [here](https://github.com/maxshuty/accessible-web-components/issues).

## Contributors

[**Max Poshusta**](https://www.linkedin.com/in/maxposhusta/)
