const fs = require('fs');

fs.copyFileSync(
  'node_modules/@eightshapes/esds-tokens/dist/scss/_esds-tokens-map.scss',
  'src/_esds-tokens-map.scss',
);
