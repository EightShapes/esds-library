# esds-list-group

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute     | Modifiers | Type                                             | Description                                      |
|------------------|---------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `collapsed`      | `collapsed`   |           | `boolean`                                        | If true, hides child esds-list-item elements     |
| `collapsible`    | `collapsible` |           | `boolean`                                        | If true, enables a visibility toggle for child esds-list-item elements |
| `cssClassObject` |               | readonly  | `{ default: string; prefix: string; collapsible: any; collapsed: any; }` |                                                  |
| `header`         | `header`      |           | `string`                                         | Header text displayed above the child esds-list-item elements |

## Methods

| Method             | Type                 |
|--------------------|----------------------|
| `collapsibleClick` | `(): void`           |
| `renderHeader`     | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |


# esds-list-item

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                             | Description                                      |
|------------------|-----------|-----------|--------------------------------------------------|--------------------------------------------------|
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; size: { conditional: any; class: any; }; }` |                                                  |
| `href`           | `href`    |           | `string`                                         | If provided the list item will include a link to the given href |
| `size`           | `size`    |           | `'small'\|'medium'\|'large'`                     | The size of the list item                        |
| `text`           | `text`    |           | `string`                                         | The text as the list item. The default slot overrides this text |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
