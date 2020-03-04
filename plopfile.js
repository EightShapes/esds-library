module.exports = plop => {
  // component generator
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
        destination: 'components/esds-{{ lowerCase (dashCase name) }}',
        base: 'plop-templates/new-component',
        templateFiles: 'plop-templates/new-component/**/*',
        globOptions: { ignore: ['.eslintignore'] },
      },
      {
        type: 'addMany',
        destination: 'test/storybook/stories',
        base: 'plop-templates/new-component-stories',
        templateFiles: 'plop-templates/new-component-stories/*',
      },
      {
        type: 'modify',
        path: './test/storybook/package.json',
        transform: (fileContents, answers) => {
          const pkgJson = JSON.parse(fileContents);
          pkgJson.dependencies[
            `@eightshapes/esds-${answers.name.toLowerCase().replace(/ /g, '-')}`
          ] = '^0.1.0';
          return JSON.stringify(pkgJson, null, 2);
        },
      },
      () => {
        return 'New component files created. Run `lerna bootstrap` to finish installation.';
      },
    ],
  });
};
