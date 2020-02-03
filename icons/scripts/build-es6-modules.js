'use strict';

const fs = require('fs-extra');
const path = require('path');
const camelCase = require('camelcase');

const sourceDir = 'dist/icons'; // output directory for svgo optimized .svg's
const outDir = 'dist';
const namespace = 'esds';
const es6ModuleNames = [];
const es6ModuleExtension = '.svg.js';
fs.mkdirpSync(outDir);

const sourceFiles = fs.readdirSync(sourceDir);
const sourceFileNames = sourceFiles.map(fn => path.parse(fn).name);

const iconNamesFilepath = path.join(outDir, `${namespace}-icon-names.json`);
fs.writeFileSync(iconNamesFilepath, JSON.stringify(sourceFileNames), 'UTF-8');

sourceFiles.forEach(fn => {
  const sourceContents = fs.readFileSync(path.join(sourceDir, fn), 'UTF-8');
  const fileName = path.parse(fn).name;
  const es6ModuleName = `${camelCase(namespace, {pascalCase: true})}Icon${camelCase(fileName, {pascalCase: true})}`;
  const outfileContents = `export const ${es6ModuleName} = \`${sourceContents}\`; `;
  const outfilePath = path.join(outDir, `${es6ModuleName}${es6ModuleExtension}`);
  fs.writeFileSync(outfilePath, outfileContents, 'UTF-8');
  es6ModuleNames.push(es6ModuleName);
});

const es6ManifestFilename = `index.js`;
const es6ManifestFileContents = es6ModuleNames.map(n => `import { ${n} } from './${outDir}/${n}${es6ModuleExtension}'\nexport { ${n} }`).join('\n');
const es6ManifestFilepath = path.join(es6ManifestFilename);
fs.writeFileSync(es6ManifestFilepath, es6ManifestFileContents, 'UTF-8');
