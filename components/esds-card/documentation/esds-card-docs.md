# esds-card

**Mixins:** Slotify, Scopify

## Properties

| Property       | Attribute       | Type                                             | Default      | Description                                      |
|----------------|-----------------|--------------------------------------------------|--------------|--------------------------------------------------|
| `description`  | `description`   | `string`                                         |              | Text description rendered below the title        |
| `href`         | `href`          | `string`                                         |              | Destination when card is clicked                 |
| `imgCropType`  | `img-crop-type` | `'fill'\|'contain'\|'cover'\|'none'\|'scale-down'` |              | Image crop behavior                              |
| `imgObjectFit` |                 | `string`                                         | "cover"      |                                                  |
| `imgSrc`       | `img-src`       | `string`                                         |              | Relative path to the image displayed on the card |
| `metadata`     | `metadata`      | `string`                                         |              | Metadata text displayed on the card              |
| `title`        | `title`         | `string`                                         | "Card Title" | Title text displayed on the card                 |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `actions` | Accepts links or buttons as actions at the bottom of the card |
| `content` | Accepts miscellaneous content for the card       |
