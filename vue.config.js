const path = require("path");

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
	 chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@css", resolve("src/assets/css"))
      .set("@c", resolve("src/common"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  //解决跨域
  devServer: {
    proxy: "http://localhost:8080"
  }
};