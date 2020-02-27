# Install Lerna

```
npm install lerna -g
```

## Bootstrap Dependencies
Before running any `npm` commands in the `esds-library` repo, run `lerna bootstrap` to install and link all necessary dependencies.

**IMPORTANT** Do not run `npm install` in any of the repo's individual packages. Doing so will break any symlinked dependencies `lerna bootstrap` has configured. If `npm install` is run in a child package, re-run `lerna bootstrap` to reconnect dependencies within the monorepo.
