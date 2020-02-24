<template>
  <!-- TODO: make the first thing look like a "slide", click something to kick it off -->
  <div class="cdr-align-text-center pres-container">
    <cdr-text
      tag="h1"
      class="cdr-align-text-center pres-header"
      modifier="heading-serif-strong-700"
    >
      Building Re-usable Components With Cedar
    </cdr-text>
    <cdr-text
      tag="h2"
      class="cdr-align-text-center pres-subheader"
      modifier="TODO-subheading"
    >
      Cole Willsea, She/Her, FED, Cedar Design System
    </cdr-text>

    <cdr-accordion
      id="intro"
      :opened="intro"
      @accordion-toggle="intro = !intro"
    >
      <template slot="label">
        Intro
      </template>
      <div class="pres-section-tabs">
        <cdr-img src="http://placekitten.com/320/320"/>
        <cdr-list modifier="unordered">
          <li>You may know me from such Slack channels as #cedar-user-support and #front-end-tech</li>
          <li>Grew up in the Bay Area</li>
          <li>Studied politics and sociology at UC Santa Cruz</li>
          <li>Drove trucks and delivered mail before getting into web dev</li>
          <li>Passionate about music</li>
          <li>Previously worked at Amazon, Capital One, a consulting agency, REI Experiences</li>
          <li>Focused on the Cedar build system/API/architecture</li>
          <li>I know what a pain enterprise software development can be, I want to make Cedar as easy to use as possible</li>
        </cdr-list>

      </div>
    </cdr-accordion>

    <cdr-accordion
      id="whatis"
      :opened="whatis"
      @accordion-toggle="whatis = !whatis"
    >
      <template slot="label">
        What Is Cedar
      </template>
      <div>
        <presentation-section title="Theory" id="theory" class="paginated paginated-active">
          <cdr-tab-panel name="What we are">
            <cdr-list modifier="unordered">
              <li>Cedar is a design system</li>
              <li>A set of flexible tools for building consistent brand experiences that can be updated holistically</li>
              <li>Primarily concerned with look and feel</li>
              <li>This system is distributed in various ways, including VueJS components, variables/tokens/mixins, SVG assets, etc.</li>
              <li>All of these distributables inherit from a core set of values for color, space, typography, animation, etc.</li>
              <li>These core values can then be modified to change the look and feel of the system</li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="What we are not">
            <cdr-list modifier="unordered">
              <li>Cedar is not a global library that can "push" out updates (thats Cedar1 and it is cursed)</li>
              <li>Cedar is not a front-end framework (thats Vue)</li>
              <li>Cedar is not a front-end build system (thats FEBS)</li>
              <li>Cedar is not an architectural pattern (thats micro-sites)</li>
              <li>Cedar is not a utility library (thats FEDPACK)</li>
              <li>Cedar is not a plug and play solution (thats just not possible)</li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Why we are like this">
            <cdr-list modifier="unordered">
              <li>flexibility, atomicity, modularity. enable as many use cases as possible, elevate patterns that emerge</li>
              <li>accessibility, usability: consistency makes it easier for everyone.</li>
              <li>marketing: that REI feel. cozy, chill</li>
              <li>the dream: being able to evolve the core set of design system values and have everything inherit from it</li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="What you need to know">
            <cdr-list modifier="unordered">
              <li>You should use Cedar as much as possible</li>
              <li>You must use Cedar semantically</li>
              <li>Don't override the look or feel of a Cedar component</li>
              <li>Sometimes your app will have unique styling and that is OK</li>
              <li>Using Cedar incorrectly is worse than not using it at all</li>
              <li>We are working to make the design to dev handoff process as easy as possible</li>
            </cdr-list>
          </cdr-tab-panel>
        </presentation-section>




        <presentation-section title="Praxis"  id="praxis" class="paginated">

          <cdr-tab-panel name="Tokens">
            tokens: semantic key value pairs that can be used for styling
            (@rei/cdr-tokens)
          </cdr-tab-panel>

          <cdr-tab-panel name="Utilities">
            CSS classes that apply a cedar token to a given property
          </cdr-tab-panel>
          <cdr-tab-panel name="Elements">
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

          </cdr-tab-panel>
          <cdr-tab-panel name="Navigation">
            navigation:
            breadcrumb
            pagination

          </cdr-tab-panel>
          <cdr-tab-panel name="Wrappers">
            content wrappers:
            card
            modal
            accordion
            tabs
          </cdr-tab-panel>
          <cdr-tab-panel name="Mixins">
            Mostly the atomic elements! SCSS only. for weird uses only
          </cdr-tab-panel>
          <cdr-tab-panel name="SVG">
            Just use cedar components, icons available otherwise.
          </cdr-tab-panel>
        </presentation-section>

        <cdr-pagination
          :pages="introPages"
          :total-pages="2"
          v-model="introPage"
          @navigate="introNav"
        />


      </div>
    </cdr-accordion>

    <cdr-accordion
      id="tips"
      :opened="tips"
      @accordion-toggle="tips = !tips"
    >
      <template slot="label">
        Tips'n'Tricks
      </template>
      <div>

        <presentation-section title="Tips'n'Tricks">
          <!--
          # general tips for making vue components (6min)
     -->
          <cdr-tab-panel name="Slots">
            - use slots for content wherever possible, as it provides the most flexibility. making decisions and naming stuff is hard, its easier to just let people do whatever they want. "header", "content", anywhere yr dumping a bunch of text, or an image. Rather than have an element/component hardcoded in your component, let the dev control it.
            - this flexibility allows us to share common pieces of code without butting up against one another. For example, `ProductCard` component has a title. If its hardcoded to use an h3 cdr-text with a certain modifier, might run into issues if someone wants to change that, or pass an icon into the title, or do all sort of other things. However if you simply provide a title slot can support all of these use cases while still sharing the common "ProductCard" functionality. If the title functionality started to get too complex or needed to be consistent, you might make a `ProductTitle` component that users can pass into that title slot.

          </cdr-tab-panel>
          <cdr-tab-panel name="Events">
            - emit events rather than binding functions. general react/vue functional component practice. props down events up.

          </cdr-tab-panel>
          <cdr-tab-panel name="Data">
            - your component should not know what vuex or ajax are. it probably shouldn't know about window. avoid side effects, let your app handle that stuff and keep the component simple.

          </cdr-tab-panel>
          <cdr-tab-panel name="State">
              - avoid private internal state when possible, expose a prop and give it a default.
          </cdr-tab-panel>
          <cdr-tab-panel name="Size">
            - make the smallest component possible. the bigger and more complex a component is, the harder it is to manage and update and customize. prime example: CdrDataTable. we are in the process of moving that component to fedpack and replacing it with a more generic and flexible CdrTable.

          </cdr-tab-panel>
          <cdr-tab-panel name="Shape">
            - do not strictly bind your component to the API of other libraries. extends: CdrButton. only accept/bind attrs that matter to your component. otherwise any time the cedar API changes, your component will need a major version bump. either use a slot, or map sensible prop names from your component to the sub-component.
            - don't build a library. 1 thing per package. it is extremely difficult to build a library that exports multiple components like cedar/or a gigantic suite of functions with shared helpers like lodash, and ensure that consumers of your library will be able to tree-shake out any un-used imports. if you do need to do this for some reason, come talk to me. this is not something you can simply google how to do.

          </cdr-tab-panel>

          <cdr-tab-panel name="Semantics">
            - USE TOKENS OVER VARIABLES.
            - but if you do have unique tokens/vars, MAKE THEM SEMANTIC!
            - Other people will consume the API of yr shared package, naming things is hard but important!
          </cdr-tab-panel>

          <cdr-tab-panel name="Purpose">
            - sometimes you need a utility function more than a component. (grid-list)
            - don't make a shared component until it's time to re-use that component on another site. Taking a .vue component out of a micro-site and putting it in fedcomp has gotten very easy. Most of the work is writing unit tests and documenting the props/events. If you put things into fedcomp immediately you run the risk of spreading a pattern that does not scale.
          </cdr-tab-panel>
        </presentation-section>

      </div>
    </cdr-accordion>

    <cdr-accordion
      id="example"
      :opened="example"
      @accordion-toggle="example = !example"
    >
      <template slot="label">
        End-To-End Example
      </template>
      <div>
        <presentation-section title="package.json" class="paginated-active" id="package">


          <!-- # package.json (5 min)

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
          - TODO: make a node module that does this
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

     -->

          <cdr-tab-panel name="Slots">
            Tab 4 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 1 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 2 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 3 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Mostly the atomic elements! SCSS only. for weird uses only
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 4 Content
          </cdr-tab-panel>
        </presentation-section>

        <presentation-section title="end-to-end" class="paginated" id="example">
          <!--
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

          if there is some way i can make it easier for you to use cedar i want to know so i can represent your viewpoint to the rest of my team. -->
          <cdr-tab-panel name="Slots">
            Tab 4 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 1 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 2 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 3 Content
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Mostly the atomic elements! SCSS only. for weird uses only
          </cdr-tab-panel>
          <cdr-tab-panel name="etc">
            Tab 4 Content
          </cdr-tab-panel>
        </presentation-section>

        <cdr-pagination
          :pages="exPages"
          :total-pages="2"
          v-model="exPage"
          @navigate="exNav"
        />
      </div>
    </cdr-accordion>
  </div>
</template>

<script>
import { CdrText, CdrTabs, CdrTabPanel, CdrPagination, CdrList, CdrButton, CdrImg, CdrAccordion } from '@rei/cedar';
import PresentationSection from './PresentationSection.vue';
export default {
  name: 'MainComponent',
  components: {
    CdrText,
    CdrTabPanel,
    CdrList,
    CdrButton,
    CdrImg,
    CdrAccordion,
    CdrPagination,
    PresentationSection
  },
  data() {
    return {
      intro: false,
      whatis: false,
      tips: false,
      example: false,
      introPage: 1,
      introPages: [{page: 1, url: 'theory'}, {page: 2, url: 'praxis'}],
      exPage: 1,
      exPages: [{page: 1, url: 'package'}, {page: 2, url: 'example'}]
    }
  },
  methods: {
    introNav(num, url, e) {
      e.preventDefault();
      document.getElementById('theory').classList.toggle('paginated-active')
      document.getElementById('praxis').classList.toggle('paginated-active')
    },

    exNav(num, url, e) {
      e.preventDefault();
      document.getElementById('example').classList.toggle('paginated-active')
      document.getElementById('package').classList.toggle('paginated-active')
    },
  }
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';

body {
  background-color: $cdr-color-background-light;
}

.paginated {
  display: none;
}
.paginated-active {
  display: block;
}

.pres-header {

}

.pres-section-header {

}

.pres-container {
  background-color: $cdr-color-background-lightest;
  margin: 0 auto;
  width: 720px;
}
.pres-section {

}

</style>
