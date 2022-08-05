module.exports = {
  extends: [
    require.resolve("./vue.cjs"),
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
  ],
};
