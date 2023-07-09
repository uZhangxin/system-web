const getters = {
  userInfo: state => state.userInfo.infos,
  token: state => state.userInfo.token,
  avatar: state => state.userInfo.infos.avatar,
  visitedViews: state => state.tagsView.visitedViews
}
export default getters