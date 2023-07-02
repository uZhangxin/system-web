const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite:{'^/api':''}, //清除请求前缀
        changeOrigin: true //是否谎报请求路径
      },
    }
  }
});
