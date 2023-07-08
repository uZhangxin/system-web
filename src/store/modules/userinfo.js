import {getCookies, removeCookies, setCookies} from "@/utils/auth";
import {CONSTANT} from "@/utils/constant";
import router from "@/router";

const state = {
  token: getCookies(CONSTANT.TOKEN) || '',
  infos: getCookies(CONSTANT.USER_INFO) !== undefined ? JSON.parse(getCookies(CONSTANT.USER_INFO)) : {}
}

const actions = {
  login({commit}, value) {
    const {token, userInfo} = value
    // 将用户信息和token存入vuex中
    commit('SET_TOKEN', token)
    commit('SET_INFOS', userInfo)
    // 将用户信息和token存入Cookies中
    setCookies(CONSTANT.TOKEN, token)
    setCookies(CONSTANT.USER_INFO, JSON.stringify(userInfo))
  },
  logout({commit}) {
    router.push({path: '/login'})
    // 将Cookies中用户信息、token清空
    removeCookies(CONSTANT.TOKEN)
    removeCookies(CONSTANT.USER_INFO)
    // 将Vuex中的用户信息、token清空
    commit('SET_TOKEN', "")
    commit('SET_INFOS', {})
  }
}

const mutations = {
  SET_TOKEN(state, value) {
    state.token = value
  },
  SET_INFOS(state, value) {
    state.infos = value
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}