import Vue from 'vue';

/* Bring in external style sheets here that aren't explicitly imported elsewhere.
 * This file is only for local dev and does not generate any distribution CSS bundles
 * include the styles below in the consuming project as needed per that project's bundling methods
 */
import '@rei/cedar/dist/cdr-fonts.css';
import '@rei/cedar/dist/style/reset.css';

/* load the compiled CSS for this component */
import './dist/index.css';
/* Bring in demo component here */
import Demo from './src/Demo.vue';



import intro from './static/intro.png';
import actcard from './static/actcard.png';
import compvar from './static/compvar.png';
import cont1 from './static/cont1.png';
import cont2 from './static/cont2.png';
import cssbuilt from './static/cssbuilt.png';
import csssrc from './static/csssrc.png';
import deps from './static/deps.png';
import dev from './static/dev.png';
import ele1 from './static/ele1.png';
import ele2 from './static/ele2.png';
import ele3 from './static/ele3.png';
import gitdep from './static/gitdep.png';
import icons from './static/icons.png';
import jsbuilt from './static/jsbuilt.png';
import jssrc from './static/jssrc.png';
import main from './static/main.png';
import nav1 from './static/nav1.png';
import nav2 from './static/nav2.png';
import nav3 from './static/nav3.png';
import prepare from './static/prepare.png';
import slots from './static/slots.png';
import tokens from './static/tokens.png';
import util1 from './static/util1.png';
import util2 from './static/util2.png';
import vers from './static/vers.png';


import flux from './static/flux.png';

import gridutil from './static/gridutil.png';

import gridtemp from './static/gridtemp.png';

import extendss from './static/extends.png';


import state from './static/state.png';

import semantics from './static/semantics.png';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: app => app(Demo,{
    props: {
      media: {
        intro,
        actcard,
        compvar,
        cont1,
        cont2,
        cssbuilt,
        csssrc,
        deps,
        dev,
        ele1,
        ele2,
        ele3,
        flux,
        state,
        semantics,
        gridutil,
        gridtemp,
        extendss,
        gitdep,
        icons,
        intro,
        jsbuilt,
        jssrc,
        main,
        nav1,
        nav2,
        nav3,
        prepare,
        slots,
        tokens,
        util1,
        util2,
        vers,
      },
    },
  })
});
