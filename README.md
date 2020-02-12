#EightShapes Design System

## Repository Structure
The EightShapes Design system is a monorepo containing design system components, tokens, icons and visual assets. Each of these assets is published as an independently versioned node package. 

The dependencies between these assets are managed using [lerna](https://lerna.js.org). 

### Dependency Tree
To view a dependency tree of the repository, in the _root_ of the repo run:

```
npm run dependency-tree
```