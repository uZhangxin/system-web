import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/style/global.css'
import store from "@/store";

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

console.log('process.env',process.env)