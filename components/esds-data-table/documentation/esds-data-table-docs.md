# esds-data-table

**Mixins:** Scopify, CSSClassify

## Properties

| Property  | Attribute | Type    | Description                                      |
|-----------|-----------|---------|--------------------------------------------------|
| `headers` | `headers` | `array` | Array containing data table header strings or objects |
| `rows`    | `rows`    | `array` | An array of arrays representing the data for each row and cell |

## Methods

| Method          | Type                       |
|-----------------|----------------------------|
| `renderHeaders` | `(): TemplateResult \| ""` |
| `renderRows`    | `(): TemplateResult \| ""` |
