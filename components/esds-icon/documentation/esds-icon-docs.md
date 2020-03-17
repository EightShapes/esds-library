# esds-icon

**Mixins:** Scopify

## Properties

| Property | Attribute | Type                         | Default        | Description                                      |
|----------|-----------|------------------------------|----------------|--------------------------------------------------|
| `size`   | `size`    | `'small'\|'medium'\|'large'` | "medium"       | Sets height and width of the icon                |
| `title`  | `title`   | `string`                     |                | Adds a visibly hidden `<title>` element with a corresponding `aria-labelledby` tag<br />when provided. Used only when icons stand alone without other context. |
| `use`    | `use`     | `string`                     | "EsdsIconStar" | Determines which icon will be shown. When leveraging the Icon sprite, the id of the<br />sprite symbol should be provided (ex: `#angle-right`). When using ES6 modules, pass the<br />name of the module (ex: `EsdsIconAngleRight`). See usage examples below. |
