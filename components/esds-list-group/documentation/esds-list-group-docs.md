# esds-list-group

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property             | Attribute             | Type                         | Default | Description                                      |
|----------------------|-----------------------|------------------------------|---------|--------------------------------------------------|
| `collapsed`          | `collapsed`           | `boolean`                    | false   | If true, hides child esds-list-item elements     |
| `collapsible`        | `collapsible`         | `boolean`                    | false   | If true, enables a visibility toggle for child esds-list-item elements |
| `header`             | `header`              | `string`                     |         | Header text displayed above the child esds-list-item elements |
| `href`               | `href`                | `string`                     |         | If provided the header will include a link to the given href |
| `selectedIndicators` | `selected-indicators` | `boolean`                    | false   | If true, shows selected state on child list items |
| `size`               | `size`                | `'small'\|'medium'\|'large'` |         | The size of the list item                        |

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
