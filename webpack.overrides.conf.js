// TODO move dev assets to dev folder and serve from there
module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: "javascript/auto",
      },
    ],
  },
};
