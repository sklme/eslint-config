// base
const base = require("./base/base.cjs");

// ts
const tsBase = require("./ts/ts-base.cjs");
const tsTypecheck = require("./ts/ts-typecheck.cjs");

// vue
const vue = require("./vue/vue.cjs");
const vueTS = require("./vue/vue-ts.cjs");
const vueTSTypecheck = require("./vue/vue-ts-typecheck.cjs");

module.exports = {
  configs: {
    base,
    "ts-base": tsBase,
    "ts-typecheck": tsTypecheck,
    vue,
    "vue-ts": vueTS,
    "vue-ts-typecheck": vueTSTypecheck,
  },
};
