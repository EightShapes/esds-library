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

| Method         | Type                      |
|----------------|---------------------------|
| `allTabs`      | `(): any[]`               |
| `getTabById`   | `(id: any): any`          |
| `linkPanels`   | `(): void`                |
| `onLabelClick` | `(event: any): void`      |
| `panelForTab`  | `(tab: any): any`         |
| `reset`        | `(): void`                |
| `selectTab`    | `(tabPanelId: any): void` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Default slot, insert <esds-tab> components in the default slot |
