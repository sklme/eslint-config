module.exports = {
  extends: [
    require.resolve("../base/base.cjs"),
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.js"],
      env: {
        node: true,
      },
    },
  ],
};
