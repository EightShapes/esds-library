# esds-tabs

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property | Attribute | Type                       | Default      | Description                   |
|----------|-----------|----------------------------|--------------|-------------------------------|
| `layout` | `layout`  | `'horizontal'\|'vertical'` | "horizontal" | The visual layout of the tabs |

## Methods

| Method             | Type                      | Description                                      |
|--------------------|---------------------------|--------------------------------------------------|
| `allTabs`          | `(): any[]`               |                                                  |
| `firstTab`         | `(): any`                 | `firstTab()` returns the first tab.              |
| `getTabById`       | `(id: any): any`          |                                                  |
| `handleSlotChange` | `(): void`                |                                                  |
| `lastTab`          | `(): any`                 | `lastTab()` returns the last tab.                |
| `linkPanels`       | `(): void`                |                                                  |
| `nextTab`          | `(): any`                 | `nextTab()` gets the tab that comes after the currently selected one,<br />wrapping around when reaching the last tab. |
| `onLabelClick`     | `(event: any): void`      |                                                  |
| `onLabelKeyDown`   | `(event: any): void`      |                                                  |
| `prevTab`          | `(): any`                 | `prevTab()` returns the tab that comes before the currently selected<br />one, wrapping around when reaching the first one. |
| `reset`            | `(): void`                |                                                  |
| `selectTab`        | `(tabPanelId: any): void` |                                                  |

## Events

| Event                   |
|-------------------------|
| `esds-tabs-tab-changed` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Default slot, insert <esds-tab> components in the default slot |
