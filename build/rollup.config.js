const path = require("path");
export default {
  input: path.resolve(process.cwd(), "src/index.tsx"),
  output: {
    exports: "default",
    // file: "./dist/bundle.js", //单个check使用
    format: "cjs",
    name: "test",
    dir: "dist", //多个check 使用 和file 不能同时存在
    entryFileNames: "bundle-[format]-[hash]-[name].js",
    compact: true, //压缩代码
    // globals: {
    //   axios: "axios",
    // },
  },
};
