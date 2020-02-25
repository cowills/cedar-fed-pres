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
          <li>You may know me from such Slack channels as #cedar-user-support</li>
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
            <cdr-list modifier="unordered">
              <li>
                Semantic key value pairs that can be used for styling
              </li>
              <li>
                Typography, Color, Spacing, Motion/Animation
              </li>
              <li>
                Distributed as @rei/cdr-tokens, available as SCSS, LESS, JS, JSON, etc.
              </li>
              <li>
                $cdr-color-text-primary-lightmode: #292929
              </li>
              <li>
                $cdr-color-background-light: #f7f7f7
              </li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Utilities">

            <cdr-list modifier="unordered">
              <li>
                Simple re-usable CSS classes
              </li>
              <li>
                Distributed as part of the @rei/cedar component library
              </li>
              <li>
                .cdr-align-text-center -> center the contents of an element
              </li>
              <li>
                .cdr-display-sr-only -> make an element only visible to screen readers
              </li>
              <li>
                .cdr-mb-space-one-x -> set the margin-bottom of an element to $cdr-space-one-x
              </li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Elements">
            <cdr-list modifier="unordered">
              <li>Components that are a Cedar wrapper around native elements</li>
              <li>Only use these components if you want the Cedar look and feel</li>
              <li>CdrButton, CdrCta, CdrLink, CdrText, CdrCheckbox, CdrIcon, CdrRadio, CdrInput, CdrSelect, CdrQuote, CdrCaption, CdrImg</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Navigation">
            <cdr-list modifier="unordered">
              <li>Core navigational elements that do not have a native equivalent</li>
              <li>CdrBreadcrumb, CdrPagination</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Wrappers">
            <cdr-list modifier="unordered">
              <li>Components that provide a simple wrapper for presenting content</li>
              <li>Cedar is only concerned with the "frame", not what goes inside</li>
              <li>CdrCard, CdrModal, CdrAccordion, CdrTabs, CdrRow, CdrCol</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Mixins">
            <cdr-list modifier="unordered">
              <li>SCSS mixins that can be used to apply Cedar styling to native elements in projects that cannot use the Vue Cedar components</li>
              <li>Distributed as @rei/cedar-component-variables</li>
              <li>Primarily covers the "atomic elements"</li>
              <li>@include cdr-button-primary-mixin;</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="SVG">
            <cdr-list modifier="unordered">
              <li>Icon library that is maintainted by the Cedar design team</li>
              <li>Distributed as @rei/cedar-icons</li>
              <li>Includes raw SVG assets as well as a tool for generating sprite sheets</li>
              <li>Most consumers should just use the inline icons that come with @rei/cedar</li>
            </cdr-list>
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
          <cdr-tab-panel name="Slots">
            <cdr-list modifier="unordered">
              <li>Use slots for content whenever possible</li>
              <li>Allows consumers to pass in another component as a prop</li>
              <li>Especially useful for text content</li>
              <li>Ensures component can be re-used without modification</li>
              EXAMPLE: product tile title
            </cdr-list>


          </cdr-tab-panel>
          <cdr-tab-panel name="Events">
            <cdr-list modifier="unordered">
              <li>Emit events rather than binding functions or hardcoding behavior</li>
              <li>Components should accept props, emit events, and have no side effects</li>
              <li>Means components are testable, understandable, modular</li>
              EXAMPLE: UGC thing?
            </cdr-list>

          </cdr-tab-panel>
          <cdr-tab-panel name="Data">

            <cdr-list modifier="unordered">
              <li>Flux architecture pattern</li>
              <li>Your component should not know where it's props/data is coming from</li>
              <li>Your component should not know what is happening to the events it emits</li>
              <li>Your component should never know what Vuex or AJAX are</li>
              ex: Micro-site fetches data, passes it to component.
              user interacts with component, and the component emits an event.
              micro-site handles the event, passes new data to the component
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="State">
            <cdr-list modifier="unordered">
              <li>Avoid private internal state whenever possible</li>
              <li>Eventually, someone is going to need to control that value</li>
              <li>Expose a property and give it a default value</li>
              ex: active tab index tabs
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Size">

            <cdr-list modifier="unordered">
              <li>Make the smallest component possible</li>
              <li>The bigger the component, the harder it is to re-use</li>
              <li>Break big component into smol components</li>
              <li>Do not build a "library" (though if you must, talk to me)</li>
              ex: activityCard. too specific. what we really needed was like "activityCardDetails" for the content
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Shape">
            <cdr-list modifier="unordered">
              <li>Do not strictly bind your component to the API of other libraries</li>
              <li>Do not use the Vue `extends` property to modify Cedar components</li>
              <li>Do not design the API of your component to match your exact business needs</li>
              <li>Expose an API that makes sense for your component, translate those props for any sub-components</li>
            </cdr-list>

          </cdr-tab-panel>

          <cdr-tab-panel name="Semantics">

            <cdr-list modifier="unordered">
              <li>Use cedar tokens whenever possible when styling rather than creating custom variables</li>
              <li>If your project does have unique values that are not in cedar, create semantic variables for those styles so they can be updated later</li>
              <li>semantic variable: $detail-card-background-color</li>
              <li>generic variable: $color-black</li>
            </cdr-list>
            </cdr-tab-panel>

          <cdr-tab-panel name="Purpose">

            <cdr-list modifier="unordered">
              <li>Sometimes you need a utility function more than a component</li>
              <li>Don't make a shared component until there is an opportunity to re-use it</li>
            </cdr-list>
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
        <presentation-section title="package.json" class="paginated paginated-active" id="package">

          <cdr-tab-panel name="version">
            <cdr-list modifier="unordered">
              <li>`"version": "0.0.1",`</li>
              <li>follow Semver!</li>
              <li>use `npm version patch/minor/major` rather than manually bumping package version</li>
              <li>use `git push --follow-tags` to push up tags</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="exports">
            <cdr-list modifier="unordered">
              <li>main/module/style communicate to rollup/webpack what files to load</li>
              <li>cjs, esm, css. there are others</li>
              <li>these are being set by the febs build</li>
              <li>files: dist, only publish contents of dist (and package.json, README, etc.)</li>
            </cdr-list>

          </cdr-tab-panel>
          <cdr-tab-panel name="dev">
            <cdr-list modifier="unordered">
              <li>Scripts mostly wrapping febs commands</li>
              <li>dev build: rollup server and webpack demo</li>
              <li>webpack/rollup woes</li>
              <li>Demo.vue to isolate demo logic, make it easier for cedar :3</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="prepare">
            <cdr-list modifier="unordered">
              <li>`"prepare": "npm run build"`
                              "@rei/some-package": "git+https://git.rei.com/scm/fedcomp/some-package.git#cool-new-feature"</li>
              <li>Lets you load yr package as a git dependency</li>
              <li>In a micro-site or another component, you can point to a branch of yr package and load it as if it were published</li>
              <li>However, since dist is not checked into repo, you must add this prepare script so it is created</li>
              <li>NOTE about updating git deps</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="deps">
            <cdr-list modifier="unordered">
              <li>deps are runtime dependencies. want them to be resolved at the top</li>
              <li>dev deps are buildtime deps, test, dev stuff. you dont want them included in yr module.</li>
              <li>deps will not be compiled into yr dist folder. thats good.</li>
              <li>babel magic: polyfills can be shared. deps resolve to as few versions as possible (SEMVER!)</li>
              <li>browserslist-config is what controls what polyfills are requested. THIS PROBABLY NEEDS SOME OVERSIGHT</li>
            </cdr-list>


          </cdr-tab-panel>

          <cdr-tab-panel name="CSS">
            <cdr-list modifier="unordered">
              <li>just as babel/npm handles resolving JS deps, can do same for CSS</li>
              <li>@import url() for .css files you depend on. if yr using a cedar component or a shared component.</li>
              <li>@import '~@rei/cdr-tokens/etc.' or scss tokens/variables.</li>
            </cdr-list>


          </cdr-tab-panel>
          <cdr-tab-panel name="ESM">
            <cdr-list modifier="unordered">
              <li>use import/export everywhere</li>
              <li>require/module.exports might break tree shaking, or webpack completely</li>
            </cdr-list>
          </cdr-tab-panel>
        </presentation-section>

        <presentation-section title="end-to-end" class="paginated" id="e2e">
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
          <cdr-tab-panel name="component">

            <cdr-list modifier="unordered">
              <li>uses tokens for styling </li>
              <li>uses cedar components were applicable </li>
              <li>imports cedar css for components used</li>
              <li>dist contents</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="another component">

            <cdr-list modifier="unordered">
              <li>does everything the first component did</li>
              <li>also imports the first component</li>
              <li>dist contents</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="fedpage">

            <cdr-list modifier="unordered">
              <li>glues together several shared components</li>
              <li>does everything a component should</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="micro-site">

            <cdr-list modifier="unordered">
              <li>actually renders and serves the fedpage</li>
              <li>back end data that is passed to our front-end application</li>
              <li>this is where to do global things. never know where yr component/page might end up. don't assume!</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="end user">

            <cdr-list modifier="unordered">
              <li>gets the smallest possible bundle for their front-end application</li>
              <li>this only works if everything is compiled in the same environment</li>
              <li>this micro-site pattern is at odds with the sort of "global" patterns we used previously</li>
              <li>how to handle things like marketing content, site banners, header/footer/nav</li>
              <li>these patterns are evolving, and may not be perfect, but adhering to them in the short term will make long term arch alignment possible</li>
            </cdr-list>
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
      console.log('hey', num, url)
      e.preventDefault();
      document.getElementById('e2e').classList.toggle('paginated-active')
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
