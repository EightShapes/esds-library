const fs = require('fs-extra');
const path = require('path');
const camelCase = require('camelcase');

const sourceDir = 'dist/icons'; // The "source" for this build step is the output directory of the optimize build step
const outDir = 'dist';
const namespace = 'esds';
const es6ModuleNames = [];
const es6ModuleExtension = '.svg.js';
fs.mkdirpSync(outDir); // Create the outDir if it doesn't already exist

const sourceFiles = fs.readdirSync(sourceDir).filter(fn => path.parse(fn).ext === '.svg'); // Get only the .svg files from the dir

/** *************************** */
// Create esds-icon-names.json
/** *************************** */
const sourceFileNames = sourceFiles.map(fn => path.parse(fn).name); // Trim the '.svg' from each filename
const iconNamesFilepath = path.join(outDir, `${namespace}-icon-names.json`);
fs.writeFileSync(iconNamesFilepath, JSON.stringify(sourceFileNames), 'UTF-8');

/** ********************************* */
// Create ES6 modules for each icon
/** ********************************* */
sourceFiles.forEach(fn => {
  // Trim the '.svg' from the filename
  const fileName = path.parse(fn).name;
  // Create the pascal cased ES6 module export name: caret-up.svg becomes EsdsIconCaretUp
  const es6ModuleName = `${camelCase(namespace, { pascalCase: true })}Icon${camelCase(fileName, {
    pascalCase: true,
  })}`;
  // Read the icon source
  const sourceContents = fs.readFileSync(path.join(sourceDir, fn), 'UTF-8');
  // Wrap the icon source in the required ES6 export statement
  const outfileContents = `export const ${es6ModuleName} = \`${sourceContents}\`; `;

  // Write the ES6 module: caret-up.svg is written to: EsdsIconCaretUp.svg.js
  const outfilePath = path.join(outDir, `${es6ModuleName}${es6ModuleExtension}`);
  fs.writeFileSync(outfilePath, outfileContents, 'UTF-8');

  // Add the module name to an array
  es6ModuleNames.push(es6ModuleName);
});

/** ********************************* */
// Create ES6 module manifest
/** ********************************* */
const es6ManifestFilename = `index.js`;
// Loop over each es6 module name and write an import & export statement for each
let es6ManifestFileContents = es6ModuleNames
  .map(n => `import { ${n} } from './${outDir}/${n}${es6ModuleExtension}';`)
  .join('\n');
es6ManifestFileContents += `\n\n${es6ModuleNames.map(n => `export { ${n} };`).join('\n')}\n`;
const es6ManifestFilepath = path.join(es6ManifestFilename);
// Write the file to ./index.js
fs.writeFileSync(es6ManifestFilepath, es6ManifestFileContents, 'UTF-8');
