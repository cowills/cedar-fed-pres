<template>
  <CedarCompsPresentation :media="media"/>
</template>

<script>
// import compiled component from dist
import CedarCompsPresentation from '../'; // TODO replace Component with pascalCase or whatever?
export default {
  name: 'Demo',
  components: {
    CedarCompsPresentation
  },
  props: {
    media: Object,
  },
  data() {
    return {
      title: 'REI Component Template',
      description: 'A Vue-CLI template for generating shared component packages'
    }
  },
}
</script>

<style lang="scss">
@import '~@rei/cdr-tokens/dist/scss/cdr-tokens.scss';
</style>
