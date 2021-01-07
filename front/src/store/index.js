import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post_list: []
  },
  mutations: {
    setPostList(prevState, newPostList) {
      prevState.post_list = newPostList
    }
  },
  actions: {
    loadPosts(store) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(r => r.json())
        .then(data => store.commit('setPostList', data))
    }
  },
  modules: {}
});
