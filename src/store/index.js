import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from "@/store/modules/userInfo";
import tagsView from "@/store/modules/tagsView";
import getters from "@/store/getters";

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    userInfo,
    tagsView
  },
  getters
})