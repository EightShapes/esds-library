# esds-card

**Mixins:** Slotify, Scopify, CSSClassify

## Properties

| Property         | Attribute          | Modifiers | Type                                             | Description                                      |
|------------------|--------------------|-----------|--------------------------------------------------|--------------------------------------------------|
| `cssClassObject` |                    | readonly  | `{ default: string; prefix: string; link: { conditional: boolean; }; size: { class: any; conditional: boolean; }; }` |                                                  |
| `description`    | `description`      |           | `string`                                         | Text description rendered below the title        |
| `href`           | `href`             |           | `string`                                         | Destination when card is clicked                 |
| `imgAspectRatio` | `img-aspect-ratio` |           | `'16:9'\|'1:1'\|'square'`                        | Image aspect ratio                               |
| `imgCropType`    | `img-crop-type`    |           | `'fill'\|'contain'\|'cover'\|'none'\|'scale-down'` | Image crop behavior                              |
| `imgSrc`         | `img-src`          |           | `string`                                         | Relative path to the image displayed on the card |
| `metadata`       | `metadata`         |           | `string`                                         | Metadata text displayed on the card              |
| `size`           | `size`             |           | `'small'\|'medium'\|'large'`                     | Overall size of the card                         |
| `title`          | `title`            |           | `string`                                         | Title text displayed on the card                 |

## Methods

| Method              | Type                       |
|---------------------|----------------------------|
| `renderActionsSlot` | `(): TemplateResult`       |
| `renderContentSlot` | `(): TemplateResult`       |
| `renderDescription` | `(): TemplateResult \| ""` |
| `renderImage`       | `(): TemplateResult`       |
| `renderMetadata`    | `(): TemplateResult \| ""` |
| `renderTitle`       | `(): TemplateResult`       |
