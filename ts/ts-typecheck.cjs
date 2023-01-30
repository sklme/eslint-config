module.exports = {
  extends: [
    require.resolve("./ts-base.cjs"),
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    project: "tsconfig.json",
  },
  // 对所有的js文件，忽略project设置
  // 并且给env node，因为这些文件一般都是构建配置，会使用的node能力
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
