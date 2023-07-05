'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://localhost:8081',
        pathRewrite:{'^/api':''}, //清除请求前缀
        changeOrigin: true //是否谎报请求路径
      },
    }
  }
});
