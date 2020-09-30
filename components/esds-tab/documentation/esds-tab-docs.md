# esds-tab

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute         | Modifiers | Type                                             | Default | Description                                      |
|------------------|-------------------|-----------|--------------------------------------------------|---------|--------------------------------------------------|
| `ariaLabelledby` | `aria-labelledby` |           | `string`                                         |         | Accessibly binds the panel to the tab label      |
| `cssClassObject` |                   | readonly  | `{ default: string; prefix: string; selected: string; }` |         |                                                  |
| `href`           | `href`            |           | `string`                                         |         | Relative Href that links to a corresponding tab panel's id |
| `label`          | `label`           |           | `string`                                         |         | The label for the tab's visibility trigger, overridden by the label slot |
| `panelId`        | `panel-id`        |           | `string`                                         |         | Used to link the label to the panel in HTML      |
| `selected`       | `selected`        |           | `boolean`                                        | false   | Determines the visibility of the tab             |

## Methods

| Method             | Type       |
|--------------------|------------|
| `setLabelFromSlot` | `(): void` |

## Slots

| Name | Description                               |
|------|-------------------------------------------|
|      | Default slot, used for the tab's content. |
