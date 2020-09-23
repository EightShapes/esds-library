# esds-button

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Default   | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|-----------|--------------------------------------------------|
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; size: { conditional: string; class: string; }; variant: { conditional: string; class: string; }; }` |           |                                                  |
| `href`           | `href`    |           | `string`                                         |           | Href for a button link, will switch the element tag to an <a> if an href is provided |
| `icon`           | `icon`    |           | `string`                                         |           | Full SVG of icon to be injected into component   |
| `size`           | `size`    |           | `'small'\|'medium'\|'large'`                     | "medium"  | size of the button                               |
| `text`           | `text`    |           | `string`                                         |           | text for the button, overridden by default prop  |
| `type`           | `type`    |           | `'button'\|'submit'\|'reset'`                    |           | visual style of the button                       |
| `variant`        | `variant` |           | `'primary'\|'secondary'\|'flat'\|'outline'`      | "primary" | visual style of the button                       |

## Methods

| Method                | Type                 |
|-----------------------|----------------------|
| `renderButtonContent` | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
