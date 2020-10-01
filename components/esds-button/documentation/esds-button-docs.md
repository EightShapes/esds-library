# esds-button

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Default   | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|-----------|--------------------------------------------------|
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; size: { conditional: string; class: string; }; variant: { conditional: string; class: string; }; }` |           |                                                  |
| `href`           | `href`    |           | `string`                                         |           | Href for a button link, will switch the element tag to an <a> if an href is provided |
| `icon`           | `icon`    |           | `string`                                         |           | Full SVG string of an icon to be injected into component. |
| `size`           | `size`    |           | `'small'\|'medium'\|'large'`                     | "medium"  | Sets the button size.                            |
| `text`           | `text`    |           | `string`                                         |           | The text on the button. Overridden by the default prop. |
| `type`           | `type`    |           | `'button'\|'submit'\|'reset'`                    | "button"  | The type attribute of the underlying HTML button. |
| `variant`        | `variant` |           | `'primary'\|'secondary'\|'flat'\|'outline'`      | "primary" | Visual style of the button.                      |

## Methods

| Method                | Type                 |
|-----------------------|----------------------|
| `renderButtonContent` | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
