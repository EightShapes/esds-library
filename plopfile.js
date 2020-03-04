module.exports = plop => {
  // controller generator
  plop.setGenerator('new-component', {
    description: 'scaffold for a new esds web component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What is the name of the component you're creating?`,
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'components/esds-{{name}}',
        base: 'plop-templates/new-component',
        templateFiles: 'plop-templates/new-component/**/*',
      },
    ],
  });
};
