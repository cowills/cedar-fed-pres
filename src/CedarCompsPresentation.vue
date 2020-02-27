<template>
  <div class="cdr-align-text-center pres-container">
    <div class="welcome">
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
    </div>

    <cdr-accordion
      id="intro"
      :opened="intro"
      @accordion-toggle="intro = !intro"
    >
      <template slot="label">
        Intro
      </template>
      <div class="pres-section-tabs">
        <cdr-img :src="media.intro" style="width: 480px;"/>
        <cdr-list modifier="unordered">
          <li>You may know me from such Slack channels as #cedar-user-support</li>
          <li>Grew up in the Bay Area</li>
          <li>Studied politics and sociology at UC Santa Cruz</li>
          <li>Drove trucks and delivered mail before getting into web dev</li>
          <li>Passionate about music</li>
          <li>Previously worked at Amazon, Capital One, a consulting agency, REI Experiences</li>
          <li>Focused on the Cedar build system/API/architecture</li>
          <li>I want to make Cedar as easy to use as possible</li>
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
              <li>Primarily concerned with look and feel, the "V" in MVC</li>
              <li>Core system of type scales, color palettes, spacing values, and more</li>
              <li>Distributed primarily as tokens and components</li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Why we are like this">
            <cdr-list modifier="unordered">
              <li>flexibility, atomicity, modularity. enable as many use cases as possible, elevate patterns that emerge</li>
              <li>accessibility, usability: consistency makes it easier for everyone.</li>
              <li>marketing: that REI feel. cozy, chill</li>
              <li>the dream: being able to evolve the core set of design system values and have everything inherit from it</li>
              <li>an example: CdrInput
                <cdr-input
                  v-model="inputModel"
                  label="Im a cool input"
                  placeholder="CdrInput"
                  @input="validateInput"
                />
                <span v-if="inputAlert" style="color: red;">
                  Whats so funny, huh?
                </span>
              </li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="What we are not">
            <cdr-list modifier="unordered">
              <li>Cedar is not a front-end framework or build system</li>
              <li>Cedar is not an architectural pattern</li>
              <li>Cedar is not a utility library</li>
              <li>Cedar is not a plug and play solution</li>
              <li>Cedar is not a global library that can "push" out updates</li>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="What you need to know">
            <cdr-list modifier="unordered">
              <li>You should use Cedar as much as possible</li>
              <li>You must use Cedar semantically</li>
              <li>Sometimes your app will have unique styling and that is OK</li>
              <li>Using Cedar incorrectly is worse than not using it at all</li>
              <li>You can always ask us to take a look</li>
            </cdr-list>
          </cdr-tab-panel>
        </presentation-section>
      </div>
    </cdr-accordion>

    <cdr-accordion
      id="dists"
      :opened="dists"
      @accordion-toggle="dists = !dists"
    >
      <template slot="label">
        What We Distribute
      </template>
      <div>
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

              <cdr-img :src="media.tokens" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Utilities">

            <cdr-list modifier="unordered">
              <li>
                Simple re-usable CSS classes
              </li>
              <li>
                Common utilities, typography, as well as wrappers around cedar tokens
              </li>
              <li>
                Distributed as part of the @rei/cedar component library
              </li>
              <cdr-img :src="media.util1" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Elements">
            <cdr-list modifier="unordered">
              <li>Components that are a Cedar wrapper around native elements</li>
              <li>Accessibility and consistency</li>
              <li>Only use these components if you want the Cedar look and feel</li>
              <!-- <li>CdrButton, CdrCta, CdrLink, CdrText, CdrCheckbox, CdrIcon, CdrRadio, CdrInput, CdrSelect, CdrQuote, CdrCaption, CdrImg</li> -->
              <cdr-img
                src="https://www.rei.com/assets/drsp/2018/q2/campaign/summer/chapter-4/rei-backpacking-bundle/live.jpg"
                alt="REI employees building trails during a stewardship event"
                width="240px"
              /><cdr-button>Add to cart</cdr-button>
              <icon-account-profile />
              <cdr-cta
                href="https://rei.com"
                cta-style="dark"
              >
                Explore cedar
              </cdr-cta>
              <!-- <cdr-caption
                summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah."
                credit="Image Credit: Blizzard Tecnica"/> -->
              <cdr-checkbox v-model="ex1"
              style="display: inline;">Default checkbox 1</cdr-checkbox>
              <cdr-link
                  href="https://www.rei.com/learn/expert-advice/ten-essentials.html">
                    the Ten Essentials
                </cdr-link>
                <!-- <cdr-quote
                    tag="aside"
                    modifier="pull"
                    summary="Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
                  /> -->
                  <cdr-radio
                name="default-example"
                custom-value="ex1"
                v-model="ex1"
                style="display: inline;"
              >Default radio 1</cdr-radio>



<cdr-input
  v-model="defaultModel"
  label="Input label"
  placeholder="Placeholder input"
/>

<cdr-select
  v-model="defaultModel"
  label="Select label"
  prompt="Prompt text"
  :options="defaultOptions"
/>
<cdr-text modifier="heading-serif-1200">
   When you gear up, we give back
 </cdr-text>

              <!-- <cdr-img :src="media.ele1" style="width: 240px; float: left;"/>
              <cdr-img :src="media.ele2" style="width: 240px; float: left;"/>
              <cdr-img :src="media.ele3" style="width: 480px; float: left;"/> -->
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Navigation">
            <cdr-list modifier="unordered">
              <li>Core navigational elements that do not have a native equivalent</li>
              <li>More complex, but opinionated for a reason</li>

              <cdr-breadcrumb
                :items="[
                  {item:{url:'', name: 'Clothing'}},
                  {item:{url:'', name: 'Clothing Accessories'}},
                  {item:{url:'', name: 'Snowboard Gloves and Mittens'}},
                  {item:{url:'', name: 'Gloves'}},
                  {item:{url:'', name: 'Insulated Gloves'}},
                ]"
              />
              <cdr-rating rating="0" count="0" />
                            <cdr-pagination
                              :pages="pages"
                              :total-pages="5"
                              v-model="page"
                            />
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Wrappers">
            <cdr-list modifier="unordered">
              <li>Components that provide a simple wrapper for presenting content</li>
              <li>Cedar is only concerned with the "frame", not what goes inside</li>
              <li>This gives designers and developers the flexibility to "compose" things out of re-usable elements</li>
              <li>As patterns emerge, they can be turned into shared components or possibly added to Cedar</li>
              <!-- <cdr-img :src="media.cont1" style="width: 480px;"/> -->
              <cdr-button
              @click="opened = true"
              aria-haspopup="dialog"
              >Show Examples
              </cdr-button>

              <cdr-modal
              label="Add to Cart"
              :opened="opened"
              @closed="opened = false"
              aria-described-by="description"
              >
              <template slot="title">
                <cdr-text
                  tag="h3"
                  style="font-family: comic sans ms;"
                >Title Slot that you have full control over 👩‍🔧 <icon-service-shop/>
                </cdr-text>
              </template>
              <div>
                ANYTHING can be passed into a wrapper component
                <cdr-accordion
                  id="default-1"
                  :opened="default1"
                  @accordion-toggle="default1 = !default1"
                >
                  <template slot="label">
                    Probably don't put an accordion into a modal though 😬
                  </template>
                  <cdr-row justify="center">
                    <cdr-col span="3">
                      <div>left col</div>
                    </cdr-col>
                    <cdr-col span="3">
                      <cdr-card>I'm a cdr-card! <cdr-button>lol</cdr-button></cdr-card>
                    </cdr-col>
                    <cdr-col span="3">
                      <div>right col</div>
                    </cdr-col>
                  </cdr-row>
                </cdr-accordion>

              </div>
              </cdr-modal>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="Mixins">
            <cdr-list modifier="unordered">
              <li>SCSS mixins that can be used to apply Cedar styling to native elements in projects that cannot use the Vue Cedar components</li>
              <li>Distributed as @rei/cedar-component-variables</li>
              <li>Primarily covers the "atomic elements"</li>
              <cdr-img :src="media.compvar" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="SVG">
            <cdr-list modifier="unordered">
              <li>Icon library that is maintainted by the Cedar design team</li>
              <li>Distributed as @rei/cedar-icons</li>
              <li>Includes raw SVG assets as well as a tool for generating sprite sheets</li>
              <li>Most consumers should just use the inline icons that come with @rei/cedar</li>
              <cdr-img :src="media.icons" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
        </presentation-section>


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
              <cdr-img :src="media.slots" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Events">
            <cdr-list modifier="unordered">
              <li>Emit events rather than binding functions or hardcoding behavior</li>
              <li>Components should accept props, emit events, and have no side effects</li>
              <li>Means components are testable, understandable, modular</li>
              <li>Your component should not know where it's props/data is coming from</li>
              <li>Your component should not know what is happening to the events it emits</li>
              <li>Your component should never know what Vuex or AJAX are</li>
              <cdr-img :src="media.flux" style="width: 320px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="State">
            <cdr-list modifier="unordered">
              <li>Avoid private internal state whenever possible</li>
              <li>Eventually, someone is going to need to control that value</li>
              <li>Expose a property and give it a default value</li>
              <cdr-img :src="media.state" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Size">
            <cdr-list modifier="unordered">
              <li>Make the smallest component possible</li>
              <li>The bigger the component, the harder it is to re-use</li>
              <li>Break big component into smol components</li>
              <li>Do not build a "library" (though if you must, talk to me)</li>

              <cdr-img :src="media.actcard" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Shape">
            <cdr-list modifier="unordered">
              <li>Do not strictly bind your component to the API of other libraries</li>
              <li>Do not use the Vue `extends` property to modify Cedar components</li>
              <li>Do not design the API of your component to match your exact business needs</li>
              <li>Expose an API that makes sense for your component, translate those props for any sub-components</li>

              <cdr-img :src="media.extendss" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Semantics">
            <cdr-list modifier="unordered">
              <li>Use cedar tokens whenever possible when styling rather than creating custom variables</li>
              <li>If your project does have unique values that are not in cedar, create semantic variables for those styles so they can be updated later</li>
              <li>semantic variable: $detail-card-background-color</li>
              <li>generic variable: $color-black</li>
              <cdr-img :src="media.semantics" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="Purpose">
            <cdr-list modifier="unordered">
              <li>Sometimes you need a utility function more than a component</li>
              <li>Don't make a shared component until there is an opportunity to re-use it</li>
              <cdr-img :src="media.gridtemp" style="width: 320px;"/>
              <cdr-img :src="media.gridutil" style="width: 320px;"/>
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
        package.json
      </template>
      <div>
        <presentation-section title="package.json" class="paginated paginated-active" id="package">
          <cdr-tab-panel name="tooling">
            <cdr-list modifier="unordered">
              <li>Use @rei/febs for your build and @rei/vunit for testing</li>
              <li>Your micro-site might need to be customized, but rarely should a shared component deviate from the standard build system</li>
              <li>Having a consistent architecture makes it easier to incrementally improve the system</li>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="version">
            <cdr-list modifier="unordered">
              <li>Follow Semver</li>
              <li>Use `npm version patch/minor/major` rather than manually bumping package version</li>
              <li>Use `git push --follow-tags` to push up tags</li>
              <cdr-img :src="media.vers" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="exports">
            <cdr-list modifier="unordered">
              <li>main/module/style communicate to rollup/webpack what files to load</li>
              <li>cjs, esm, css. there are others</li>
              <li>these are being set by the febs build</li>
              <li>files: dist, only publish contents of dist (and package.json, README, etc.)</li>
              <cdr-img :src="media.main" style="width: 480px;"/>
            </cdr-list>

          </cdr-tab-panel>
          <cdr-tab-panel name="dev">
            <cdr-list modifier="unordered">
              <li>Scripts mostly wrapping febs commands</li>
              <li>dev build: rollup server and webpack demo</li>
              <li>webpack/rollup woes</li>
              <li>Demo.vue to isolate demo logic, make it easier for cedar :3</li>
              <cdr-img :src="media.dev" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="prepare">
            <cdr-list modifier="unordered">
              <li>Lets you load yr package as a git dependency</li>
              <li>In a micro-site or another component, you can point to a branch of yr package and load it as if it were published</li>
              <li>However, since dist is not checked into repo, you must add this prepare script so it is created</li>
              <cdr-img :src="media.gitdep" style="width: 640px;"/>
              <cdr-img :src="media.prepare" style="width: 480px;"/>
            </cdr-list>
          </cdr-tab-panel>
          <cdr-tab-panel name="deps">
            <cdr-list modifier="unordered">
              <li>Dependencies are needed at runtime, we want them to be resolved at the top (babel polyfills, shared components, utilities)</li>
              <li>DevDependencies are not needed at runtime (test, lint, dev, build)</li>
              <li>Dependencies will not be bundled into yr `/dist` folder, allowing the consuming application to resolve them</li>
              <li>Only get 1 copy of each polyill, cedar component, lodash helper, etc. that are used in your micro-site</li>
              <li>browserslist controls which polyfills to include, needs more oversight</li>
              <cdr-img :src="media.deps" style="width: 480px;"/>
            </cdr-list>


          </cdr-tab-panel>

          <cdr-tab-panel name="ESM">
            <cdr-list modifier="unordered">
              <li>Just use `import/export` (ESM) everywhere</li>
              <li>Using `require/module.exports` (CJS) might break tree shaking</li>
              <li>Mixing ESM and CJS can break Webpack completely</li>
              <cdr-img :src="media.jsbuilt" style="width: 640px;"/>
            </cdr-list>
          </cdr-tab-panel>

          <cdr-tab-panel name="CSS">
            <cdr-list modifier="unordered">
              <li>@import url() for .css files you depend on, whether it is Cedar or another shared component</li>
              <li>@import '~@rei/cdr-tokens/etc.' for scss tokens/variables</li>
              <li>Webpack/NPM will resolve which version to load, so practice good semver</li>
              <!-- <cdr-img :src="media.csssrc" style="width: 640px;"/> -->
              <cdr-img :src="media.cssbuilt" style="width: 640px;"/>
            </cdr-list>


          </cdr-tab-panel>

        </presentation-section>

      </div>
    </cdr-accordion>
  </div>
</template>

<script>
import { CdrText, CdrTabs, CdrTabPanel, CdrPagination, CdrCard, CdrRow, CdrCol, CdrList, CdrModal, CdrButton, CdrImg, CdrAccordion, IconServiceShop, CdrInput, CdrLink, CdrRadio, CdrCheckbox, CdrQuote, CdrSelect, CdrRating, CdrBreadcrumb, IconAccountProfile, CdrCta, CdrCaption } from '@rei/cedar';
import PresentationSection from './PresentationSection.vue';
export default {
  name: 'MainComponent',
  components: {
    CdrLink, CdrRadio, CdrCheckbox, CdrQuote, CdrSelect, IconAccountProfile, CdrCta, CdrCaption,IconServiceShop,
    CdrRating, CdrBreadcrumb,
    CdrText, CdrModal,
    CdrCard, CdrRow, CdrCol,
    CdrTabPanel,
    CdrList,
    CdrInput,
    CdrButton,
    CdrImg,
    CdrAccordion,
    CdrPagination,
    PresentationSection
  },
  props: {
    media: Object,
  },
  data() {
    return {
      inputModel: '',
      inputAlert: false,
      intro: false,
      whatis: false,
      default1: false,
      dists: false,
      opened: false,
      ex1: true,
      defaultModel: 'foo',
      defaultOptions: ['foo', 'bar', 'baz'],
      tips: false,
      example: false,
      introPage: 1,
      introPages: [{page: 1, url: 'theory'}, {page: 2, url: 'praxis'}],
      page: 1,
      pages: [{page: 1, url: '1'}, {page: 2, url: '2'}, {page: 3, url: '3'}, {page: 4, url: '4'}, {page: 5, url: '5'}]
    }
  },
  methods: {
    validateInput(x) {
      this.inputAlert = (x === 'lol');
    },
    // introNav(num, url, e) {
    //   e.preventDefault();
    //   document.getElementById('theory').classList.toggle('paginated-active')
    //   document.getElementById('praxis').classList.toggle('paginated-active')
    // },
    //
    // exNav(num, url, e) {
    //   console.log('hey', num, url)
    //   e.preventDefault();
    //   document.getElementById('e2e').classList.toggle('paginated-active')
    //   document.getElementById('package').classList.toggle('paginated-active')
    // },
  }
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';

body {
  background-color: $cdr-color-background-light;
}

// .paginated {
//   display: none;
// }
// .paginated-active {
//   display: block;
// }

.pres-header {

}

.pres-section-header {

}

.pres-container {
  background-color: $cdr-color-background-lightest;
  margin: 0 auto;
  width: 720px;
  padding-bottom: 360px;
}
.pres-section {

}

.welcome {
  padding: 360px 80px;
}

img {
  border: 1px solid $cdr-color-border-primary-lightmode !important;
}

</style>
