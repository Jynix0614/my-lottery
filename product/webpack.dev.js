const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    open: true,
    proxy: {
      "*": "http://172.18.20.50:18888"
    },
    before() {
      serve.run(18888, "n");
    }
  }
});
