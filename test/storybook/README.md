# \<esds-storybookrybook>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i esds-storybookrybook
```

## Usage
```html
<script type="module">
  import 'esds-storybookrybook/esds-storybookrybook.js';
</script>

<esds-storybookrybook></esds-storybookrybook>
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

```bash
npm start:compatibility
```
To run a local development server in compatibility mode for older browsers that serves the basic demo located in `demo/index.html`
