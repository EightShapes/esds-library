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


# esds-tabs

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Modifiers | Type                                   | Default                                          |
|------------------|-----------|----------------------------------------|--------------------------------------------------|
| `KEYCODES`       |           | `object`                               | {"DOWN":40,"LEFT":37,"RIGHT":39,"UP":38,"HOME":36,"END":35} |
| `cssClassObject` | readonly  | `{ default: string; prefix: string; }` |                                                  |
| `linkedTabs`     |           | `never[]`                              | []                                               |
| `tabCounter`     |           | `number`                               | 0                                                |

## Methods

| Method           | Type                      | Description                                      |
|------------------|---------------------------|--------------------------------------------------|
| `allTabs`        | `(): any[]`               |                                                  |
| `firstTab`       | `(): any`                 | `firstTab()` returns the first tab.              |
| `getTabById`     | `(id: any): any`          |                                                  |
| `lastTab`        | `(): any`                 | `lastTab()` returns the last tab.                |
| `linkPanels`     | `(): void`                |                                                  |
| `nextTab`        | `(): any`                 | `nextTab()` gets the tab that comes after the currently selected one,<br />wrapping around when reaching the last tab. |
| `onLabelClick`   | `(event: any): void`      |                                                  |
| `onLabelKeyDown` | `(event: any): void`      |                                                  |
| `panelForTab`    | `(tab: any): any`         |                                                  |
| `prevTab`        | `(): any`                 | `prevTab()` returns the tab that comes before the currently selected<br />one, wrapping around when reaching the first one. |
| `reset`          | `(): void`                |                                                  |
| `selectTab`      | `(tabPanelId: any): void` |                                                  |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Default slot, insert <esds-tab> components in the default slot |
