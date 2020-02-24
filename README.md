- intro
- what is cedar
- ???
- vue tips'n'tricks
- ???
- the package.json contract
- ???




# intro (1.5min)

- web dev on cedar design system team.
- talking about building shared components with cedar. patterns we are still figuring out, but have been getting lots of questions about, made sense to share what we know so far and document.
- i have probably exactly 20 minutes of content prepared, will open things up for clarification after each section. save tangents, venting, or puns for the end please.

- i usually work remote and am a mysterious figure who pops up in the user support channels on slack. a lil about me:
-- i grew up in the bay area and have a degree in political theory and sociology from uc santa cruz,
-- though after graduating i drove trucks and delivered mail for about 6 years before studying web development.
-- my biggest passion is music, i've been making music and playing in bands for over half my life, and since moving to seattle 4 years ago i've gotten really into the dance music scene here.
-- i previously worked at amazon, c1, and a consulting agency, as well as on the REI experiences team before i joined cedar, where i'm very happy to be working on the platform level after many years in e-commerce.
-- focus on cedar team is build system/API/architecture, making sure no matter what team yr on at REI you can consume cedar in a way that allows the design system to be updated in a friction-less way.
- Which leads me into my first topic:
<!--
# what is cedar (3min)

- Cedar is a design system: consistent brand experience that can be updated as a whole.
- a lot of people think of Cedar as encompassing the entire front-end build, or being a front-end framework, but we only care about the parts that the user sees and interacts with.
- things need to be consistent for accessibility and usability, things need to be branded for marketability, and they must be updatable otherwise re-designs are costly.
- the dream: if cedar is used everywhere, then we could switch to a purple based color system with all the spacing using odd values and extremely slow motion animations without anyone needing to do anything besides incrementing their cedar dependency

- focus on tokens/key-value pairs, atomic components, shells/containers, re-usable pieces, stuff that really needs to be consistent like breadcrumbs and pagination.
- Cedar elements should be used semantically. If yr using CdrButton component or $cdr-color-text-link-lightmode then we can change what a button looks like or what link color is and all you need to do is bump versions.
- Important thing is to always use things for intended purpose.  if you use text color on a custom background, you might have bad time. if you use border color for text cuz the value happens to match what yr designer gave you, you might have a bad time.	$cdr-color-text-primary-lightmode will always be accessible against $cdr-color-background-light, etc.
- Sometimes you will have values that are unique to yr component/app and that is OK.
- using cedar incorrectly can be worse than not using cedar at all. if yr unsure, put us on the PR or ask in user support.

- if yr building a shared component, you should use cedar as often and as semantically as possible. that way as cedar evolves yr component will update along with it.
- we're trying to get to the point with the UI toolkit where it's easier for designers to designate which components/tokens you use. -->

## what we distribute (1.5min)

tokens: semantic key value pairs that can be used for styling
(@rei/cdr-tokens)

(vue: @rei/cedar, scss: @rei/cedar-component-variables)
components that are basically native elements:
button
cta
link
text
checkbox
icon
radio
input
select
quote
caption
image

navigation:
breadcrumb
pagination

content wrappers:
card
modal
accordion
tabs

The idea here is that you could build anything you need through some combination of the previous elements. If there is some essential atomic element that we aren't representing, then we would add it to cedar. Otherwise, we would build it using cedar component/tokens and put it in fedcomp. back-to-top-button.

# questions

# general tips for making vue components (6min)

- use slots for content wherever possible, as it provides the most flexibility. making decisions and naming stuff is hard, its easier to just let people do whatever they want. "header", "content", anywhere yr dumping a bunch of text, or an image. Rather than have an element/component hardcoded in your component, let the dev control it.
- this flexibility allows us to share common pieces of code without butting up against one another. For example, `ProductCard` component has a title. If its hardcoded to use an h3 cdr-text with a certain modifier, might run into issues if someone wants to change that, or pass an icon into the title, or do all sort of other things. However if you simply provide a title slot can support all of these use cases while still sharing the common "ProductCard" functionality. If the title functionality started to get too complex or needed to be consistent, you might make a `ProductTitle` component that users can pass into that title slot.
- emit events rather than binding functions. general react/vue functional component practice. props down events up.
- your component should not know what vuex or ajax are. it probably shouldn't know about window. avoid side effects, let your app handle that stuff and keep the component simple.
- sometimes you need a utility function more than a component. (grid-list)
- avoid private internal state when possible, expose a prop and give it a default.
- don't use a cedar component if you don't want the cedar look. i.e, dont use a hidden CdrInput, just use an input
- don't override cedar classes. first off, it won't work right. you can attach class to root component element, and target things inside as needed. (.table th vs. .table .cdr-data-table-heading/etc.)
- do not strictly bind your component to the API of other libraries. extends: CdrButton. only accept/bind attrs that matter to your component. otherwise any time the cedar API changes, your component will need a major version bump. either use a slot, or map sensible prop names from your component to the sub-component.
- make the smallest component possible. the bigger and more complex a component is, the harder it is to manage and update and customize. prime example: CdrDataTable. we are in the process of moving that component to fedpack and replacing it with a more generic and flexible CdrTable.
- don't make a shared component until it's time to re-use that component on another site. Taking a .vue component out of a micro-site and putting it in fedcomp has gotten very easy. Most of the work is writing unit tests and documenting the props/events. If you put things into fedcomp immediately you run the risk of spreading a pattern that does not scale.
- don't build a library. 1 thing per package. it is extremely difficult to build a library that exports multiple components like cedar/or a gigantic suite of functions with shared helpers like lodash, and ensure that consumers of your library will be able to tree-shake out any un-used imports. if you do need to do this for some reason, come talk to me. this is not something you can simply google how to do.
- USE TOKENS OVER VARIABLES. but if you do have unique tokens/vars, MAKE THEM SEMANTIC!


# questions


# package.json (5 min)

webpack/rollup/babel dev/test config all handled by febs now. Follow their config steps and yr good. package.json is the last big gray area where you might run into trouble.


`"version": "0.0.1",`
- Semver. fixed a bug? patch. add a new features? minor. Changed something public? major.
communicates to consumers whether or not an update may break their app. UNIT TESTS ARE GREAT. testing directly in consumers is also good. bitbucket lets you see how people are using your component.

- use npm version patch/minor/major rather than manually bumping package version.
then `git push --follow-tags`. tags your version, makes the commit have the version number in it. makes it MUCH easier to publish fixes for older versions, figure out what code is in what evrsion.
commit message: `version bump` is almost completely useless



```
"main": "dist/index.js",
"module": "dist/index.esm.js",
"style": "dist/index.css",
```
- un-official package.json entries which are used by rollup/webpack when building your app.
main -> CJS. can run anywhere. vanilla js.
module -> ESM. needs special build, but more optimizable. modules allow tree shaking, static analysis, etc.
esm.js not mjs.
style -> points to the css file for your component. postcss-import will handle `@import url('@rei/your-component')` turning into `@import url('@rei/your-component/dist/index.css')`

- These three lines could be a whole presentation unto themselves, you can mostly trust the magic. Use import/export for JS and @import url() for .css files and yr good. (cdr-tokens scss exception)




```
"files": [
  "dist"
],
```
What files get published as part of your component.
probably only need `dist`
package.json and readme.md included by default (???)
```
"browserslist": "extends @rei/browserslist-config",
```
communicates to babel/babel-env/babel-preset-env what polyfills to include based on the browsers we support.
febs handles all that magic for you, just don't worry about it
???? this is an area that probably needs some management/FED attention







  "scripts": {

TODO: update these with new febs pattern
```
"dev:server": "febs dev",
"dev:build": "cross-env NODE_ENV=dev BABEL_ENV=es rollup -c --watch",
"dev:clean": "rimraf dist && npm run dev",
"dev": "npm-run-all -p dev:build dev:server",
"start": "npm run dev",
```
- dev build.
febs first compiles your source code using rollup and outputs the content to dist
febs then compiles your local-development.js file using webpack and starts up a web server
- The reasons we use both rollup and webpack are myriad. short version is that rollup is good at some things and bad at others and vice versa, maybe webpack5 will save us.

- Recommend you put any demo logic into a Demo.vue file, that way it can be used independent of the dev server (cedar would like to create a ui toolkit and demo page for everything in fedpack that is being maintained, having a Demo.vue file we can pull in would make that process a lot easier)


`"prepare": "npm run build"`
This will let you use your package as a git dependency for testing/development.

replace version number with `git+CLONE_URL#BRANCH-NAME`

"@rei/some-package": "git+https://git.rei.com/scm/fedcomp/some-package.git#cool-new-feature"

run `npm install`. NOTE you must use a branch name and not a hash to bypass issues with jenkins.
this means if you push new commits to your branch and want to pull them in, you will first need to
<!-- TODO: make a node module that does this -->
`rm -rf node_modules/@rei/some-package && rm package-lock.json` to force npm to download the new commits. Otherwise the package-lock will be pinned to whatever the most recent commit was when you ran npm install.

```
  "dependencies": {
    "@babel/runtime": "^7.7.4",
    "@babel/runtime-corejs3": "^7.7.4",
    "@rei/cedar": "^4.0.0"
  },
```
Things needed at runtime. Anything you import and use in your component should probably be listed here.
BABEL RUNTIME -> polyfills to ensure code works in all supported browsers. this configuration ensures that when you build yr component, those polyfills are not bundled directly into yr code. lets you de-dupe them.
@babel dependencies resolve to 1 version, allowing components to share helpers rather than each bundling copies of polyfills

```
  "peerDependencies": {
    "vue": "^2.6.10"
  },
```


```
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "@babel/runtime": "^7.7.4",
    "@rei/browserslist-config": "^1.0.4",
    "@rei/cdr-tokens": "^3.0.0"
    "@rei/febs": "^6.0.0",
    "@rei/vunit": "^2.0.0",
    "@vue/test-utils": "^1.0.0-beta.31"
  },
```
Things needed at build time. Babel tools, testing stuff, etc.



# end to end (3min)

How the magic all ties together:
rollup builds a component package.
css imports are left un-transformed so they can be resolved later (based on dependencies)
babel injects helpers -> import example (based on dependencies)

Fedpage imports that component.
its rollup build exports a similar set of files
it depends on the component package

micro-site imports the component
it does not need to add "component" as a dependency, unless it is using that component separately somewhere else
it only needs to load the fedpage CSS, as that will load the component css, which loads anything it needs
if fedpage/micro-site/component all load the same CSS file from same maj version, it gets de-duped
if they all need the same babel polyfill, only 1 gets added
any un-used JS files shaken out.


THIS ALL DEPENDS on you setting package.json fields correctly.
For example, if you don't list babel runtime/corejs3 as a dependency, they will get bundled into yr distributed code and duplicated.
If your component doesn't have a prepare script, you can't test it in other sites/components

# conclusion (1min)

Whether or not our current architecture is the best, by adhering to a common architecture we make it easier to update as a group, turn common patterns into libraries (@rei/component template turned into febs component build).

if there is some way i can make it easier for you to use cedar i want to know so i can represent your viewpoint to the rest of my team.
