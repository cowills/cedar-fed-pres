<template>
  <div class="cdr-align-text-center pres-section">
    <cdr-text
      tag="h3"
      modifier="heading-serif-strong-500"
    >
      {{ title }}
    </cdr-text>

    <cdr-tabs modifier="centered" class="pres-section-tabs" height="320px">
      <slot/>
    </cdr-tabs>
  </div>
</template>

<script>
import { CdrText, CdrTabs } from '@rei/cedar';
export default {
  name: 'MainComponent',
  components: {
    CdrText,
    CdrTabs,
  },
  props: {
    title: String,
  }
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';

.pres-section {

}

.pres-section-tabs ul {
  width: 640px;
  margin: 0 auto;
  text-align: left;
  // probably add default padding/centering to content here

}

</style>
