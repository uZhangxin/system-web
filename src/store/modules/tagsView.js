const state = {
  visitedViews: []
}

const actions = {}

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || "none",
      })
    )
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}