const getters = {
  userInfo: state => state.userInfo.infos,
  token: state => state.userInfo.token,
  avatar: state => state.userInfo.infos.avatar
}
export default getters