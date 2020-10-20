# esds-data-table

**Mixins:** Scopify, CSSClassify

## Properties

| Property         | Attribute | Modifiers | Type                                   | Description                                      |
|------------------|-----------|-----------|----------------------------------------|--------------------------------------------------|
| `cssClassObject` |           | readonly  | `{ default: string; prefix: string; }` |                                                  |
| `headers`        | `headers` |           | `array`                                | Array containing data table header strings or objects |
| `rows`           | `rows`    |           | `array`                                | An array of arrays representing the data for each row and cell |

## Methods

| Method          | Type                       |
|-----------------|----------------------------|
| `renderHeaders` | `(): TemplateResult \| ""` |
| `renderRows`    | `(): TemplateResult \| ""` |
