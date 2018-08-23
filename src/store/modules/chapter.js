const state = {
  title: "some title",
  content: "no content"
};

const mutations = {
  setContent(state, content) {
    state.content = content;
  }
};

const actions = {
  setContent: ({ commit }, content) => commit("setContent", content)
  // setContent: (_, p) => console.log(p)
};

export default {
  state,
  mutations,
  actions
};
