常用的一些 eslint 配置，方便复用与开发

## 使用方法

在`.eslintrc`中添加配置

### Vue

```js
nodule.exports = {
  extends: [
    //
    "plugin:@iskl/vue-ts-typecheck", // 或者 plugin:@iskl/eslint-plugin/vue-ts-typecheck
    /**
     * 有多个配置，从上倒下，下方的配置包括前面的所有配置
     * 1. base eslint的基础配置
     * 2. vue vue的基本配置
     * 3. vue-ts 在上一个的基础上增加ts的支持
     * 4. vue-ts-typecheck 在上一个的基础上会增加类型的提示
     */

    // 其他配置
    "prettier",
  ],
};
```
