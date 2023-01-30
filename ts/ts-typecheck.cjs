module.exports = {
  extends: [
    require.resolve("./ts-base.cjs"),
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      env: {
        node: true,
      },
      parserOptions: {
        project: null,
      },
    },
  ],
};
