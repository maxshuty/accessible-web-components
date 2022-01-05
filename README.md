# Simple Range

A simple, lightweight (13kb), responsive, customizeable, extensible, & accessible range selector!

With Simple Range you can easily create multiple extensible & accessible range selectors on a page, and you don't even have to worry about event listeners not getting cleaned up because it will handle all of that for you!

### Accessibility Statement

This component was designed with accessibility in mind, however it by no means guarantees that it is fully accessible as browsers are always changing and accessibility requirements are always being refined.

If you notice any issues at all regarding accessibility of this component we implore you to [submit an issue](https://github.com/maxshuty/accessible-web-components/issues).

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

## Alternatively you can easily customize colors and other options like these examples:

- Using an ID using `id` so that it will be emitted on the `range-changed` event and using `min-label` and `max-label` for accessibility. Also using `number-of-legend-items-to-show` to show 6 values below the slider:

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

- You can adjust the number of legend items to show and you can also
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

- Using a custom range changed event name using `event-name-to-emit-on-change` so that your consumer
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

- Hiding the legend using `hide-legend`:

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

## Required props:

| Parameter   | Alt Name | Type | Values                           | Required |
| :---------- | :------- |:---  | :------------------------------- | :------: |
| `min-range` | `min`    | int  | The minimum range for the slider |   Yes    |
| `max-range` | `max`    | int  | The maximum range for the slider |   Yes    |

## Non-required props and their defaults:

| Parameter                        | Type    | Values                                                                                                                                                                                     |                         Default                          |
| :------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------: |
| `id`                             | string  | If provided when the range is changed the range-changed event will include the ID of the slider (useful when there are more than one)                                                      |                          `null`                          |
| `number-of-legend-items-to-show` | int     | Number of legend items to show below the slider                                                                                                                                            |                           `2`                            |
| `min-label`                      | string  | Accessibility label for the minimum value label                                                                                                                                            |                       `'Minimum'`                        |
| `max-label`                      | string  | Accessibility label for the maximium value label                                                                                                                                           |                       `'Maximum'`                        |
| `event-name-to-emit-on-change`   | string  | The event name that will be emitted when the user adjusts the range. I.e. window.addEventListener('my-custom-range-changed-event-name-here', () => doStuff()                               |                     `range-changed`                      |
| `hide-label`                     | boolean | Whether or not to hide the label. Simply add the `hide-label` attribute for this to work (truth is inferred by the presence of this attribute existing)                                    |                         `false`                          |
| `hide-legend`                    | boolean | Whether or not to hide the legend. Simply add the `hide-legend` attribute for this to work (truth is inferred by the presence of this attribute existing)                                  |                         `false`                          |
| `slider-color`                   | string  | An awesome[red]sauce color (pun intended)                                                                                                                                                  |                         `tomato`                         |
| `circle-color`                   | string  | The color of the slider circles                                                                                                                                                            |                    `#ffffff` (white)                     |

## Contributions

Contributions are always welcome. Please fork this repo and submit a PR.

Found a bug or want a new feature? Create an issue or a feature request [here](https://github.com/maxshuty/accessible-web-components/issues).

## Contributors

[**Max Poshusta**](https://www.linkedin.com/in/maxposhusta/)
