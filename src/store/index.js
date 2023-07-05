import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from "@/store/modules/userinfo";
import getters from "@/store/getters";

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userInfo,
  },
  getters
})