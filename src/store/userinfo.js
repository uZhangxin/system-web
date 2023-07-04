import {getCookies, setCookies} from "@/store/auth";
import {CONSTANT} from "@/utils/constant";

const state = {
  token: getCookies(CONSTANT.TOKEN) || '',
  infos: getCookies(CONSTANT.USER_INFO) !== undefined ? JSON.parse(getCookies(CONSTANT.USER_INFO)) : {}
}

const actions = {
  login({commit}, value) {
    const {token, userInfo} = value
    commit('SET_TOKEN', token)
    commit('SET_INFOS', userInfo)
    setCookies(CONSTANT.TOKEN, token)
    setCookies(CONSTANT.USER_INFO, JSON.stringify(userInfo))
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