# esds-list-group

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property             | Attribute             | Modifiers | Type                                             | Default | Description                                      |
|----------------------|-----------------------|-----------|--------------------------------------------------|---------|--------------------------------------------------|
| `collapsed`          | `collapsed`           |           | `boolean`                                        | false   | If true, hides child esds-list-item elements     |
| `collapsible`        | `collapsible`         |           | `boolean`                                        | false   | If true, enables a visibility toggle for child esds-list-item elements |
| `cssClassObject`     |                       | readonly  | `{ default: string; prefix: string; selectedIndicators: { conditional: boolean; class: string; }; collapsible: boolean; collapsed: boolean; size: { conditional: any; class: any; }; }` |         |                                                  |
| `header`             | `header`              |           | `string`                                         |         | Header text displayed above the child esds-list-item elements |
| `href`               | `href`                |           | `string`                                         |         | If provided the header will include a link to the given href |
| `selectedIndicators` | `selected-indicators` |           | `boolean`                                        | false   | If true, shows selected state on child list items |
| `size`               | `size`                |           | `'small'\|'medium'\|'large'`                     |         | The size of the list item                        |

## Methods

| Method             | Type                 |
|--------------------|----------------------|
| `collapsibleClick` | `(): void`           |
| `renderHeader`     | `(): TemplateResult` |
| `renderListItems`  | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |


# esds-list-item

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute  | Modifiers | Type                                             | Description                                      |
|------------------|------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `cssClassObject` |            | readonly  | `{ default: string; nested: any; prefix: string; size: { conditional: any; class: any; }; selected: any; }` |                                                  |
| `href`           | `href`     |           | `string`                                         | If provided the list item will include a link to the given href |
| `nested`         | `nested`   |           | `boolean`                                        | If true, indents the list group to show hierarchy |
| `selected`       | `selected` |           | `boolean`                                        | If true, will include a selected indicator to the left of the list item |
| `size`           | `size`     |           | `'small'\|'medium'\|'large'`                     | The size of the list item                        |
| `text`           | `text`     |           | `string`                                         | The text as the list item. The default slot overrides this text |

## Methods

| Method       | Type                 |
|--------------|----------------------|
| `renderIcon` | `(): TemplateResult` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
|           | Default slot, put whatever you want in here. |
| `content` | Insert content in the named "content" slot.  |
