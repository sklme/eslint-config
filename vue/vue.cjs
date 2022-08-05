module.exports = {
  env: {
    "vue/setup-compiler-macros": true,
  },
  extends: [require.resolve("../base/base.cjs"), "plugin:vue/vue3-recommended"],
};
