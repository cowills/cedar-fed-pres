
{
/* Name must start with the @rei/ prefix
  Do not use `cdr-` or `cedar-` in the package name
 */
"name": "@rei/package-name",

/* Components should be versioned according to semver (major.minor.patch):
  - major for breaking changes
  - minor for backwards compatible additions
  - patch for bug fixes
 */
"version": "0.0.1",

/* Designate which files are being distributed by this package and what they do
  - main: CJS build
  - module: ESM build
  - style: CSS file that styles the component
  These file names/paths are set by @rei/febs and should not be altered
  Do not export un-built source code
*/
"main": "dist/index.js",
"module": "dist/index.esm.js",
"style": "dist/index.css",

/* sets which files to publish to NPM.
  README, package.json, etc. are published by default
  dist is all that is required here */
"files": [
  "dist"
],

"scripts": {
  /* wipes the /dist folder before each production build */
  "prebuild": "rimraf dist",
  /* necessary for loading this package as a git dependency */
  "prepare": "npm run build",
  /* runs the production febs/rollup build */
  "build": "febs prod --profile=component",

  /* runs tests using vunit, can run both vue and vanilla js tests */
  "test": "vunit --spec=./test/**/*.spec.js",

  /* febs/rollup compiles source code to /dist */
  "dev:build": "febs dev --profile=component --watch",
   /* febs/webpack builds `local-development.js`/`Demo.vue` */
  "dev:server": "febs dev --profile=application",
  /* builds the component, and then serves up the demo app which loads the built component*/
  "dev": "npm-run-all -p dev:build dev:server",

},
"dependencies": {
  /* babel dependencies needed at runtime for polyfills.
  major version must match what @rei/febs is using */
  "@babel/runtime": "^7.8.4",
  "@babel/runtime-corejs3": "^7.8.4",
  /* Cedar component library */
  "@rei/cedar": "^4.0.0"
},
"devDependencies": {
  /* cdr-tokens are compiled into the CSS at build time, so they are a devDependency
    Note that if you use tokens in your JS code you will need to list cdr-tokens as a dependency instead */
  "@rei/cdr-tokens": "^3.0.0",

  /* rei build tool.
  uses rollup for component builds and webpack for application builds */
  "@rei/febs": "^7.1.0",
  /* rei test runner, uses standard mocha config */
  "@rei/vunit": "^2.1.4",

  /* vue testing framework */
  "@vue/test-utils": "^1.0.0-beta.31",

  /* build utilities */
  "npm-run-all": "^4.1.5",
  "rimraf": "^2.6.0"
}
}
