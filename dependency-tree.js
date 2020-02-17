#!/usr/bin/env node
// Lifted from: https://github.com/lerna/lerna/pull/1970#issuecomment-472184926

const { getPackages } = require('@lerna/project');
const PackageGraph = require('@lerna/package-graph');

(async function listDependencyTree() {
  const cwd = process.cwd(); // or process.argv?
  const pkgs = await getPackages(cwd);
  const graph = new PackageGraph(pkgs);
  const json = {};

  graph.forEach((node, name) => {
    if (name.startsWith('@eightshapes')) {
      json[name] = [...node.localDependencies.keys()].sort();
    }
  });

  console.log(JSON.stringify(json, null, 2)); // eslint-disable-line no-console
})();
