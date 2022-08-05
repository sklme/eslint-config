const base = require("./base/base.cjs");
const vue = require("./vue/vue.cjs");
const vueTS = require("./vue/vue-ts.cjs");
const vueTSTypecheck = require("./vue/vue-ts-typecheck.cjs");

module.exports = {
  configs: {
    base,
    vue,
    "vue-ts": vueTS,
    "vue-ts-typecheck": vueTSTypecheck,
  },
};
