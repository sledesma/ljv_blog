import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		menu_views: {
			details: [{ id: 1, name: "Volver", url: "/" }],
			home: [
				{ id: 1, name: "Item", url: "#" },
				{ id: 2, name: "Item", url: "#" },
				{ id: 2, name: "Item", url: "#" },
			],
		},
		menu_actual: "home",
		post_list: [],
		post_actual: {
			title: "",
		},
	},

	mutations: {
		setPostList(prevState, newPostList) {
			prevState.post_list = newPostList;
		},

		changeActualPost(prevState, newPost) {
			prevState.post_actual = newPost;
		},

		changeActualMenu(prevState, newMenu) {
			prevState.menu_actual = newMenu;
		},
	},

	getters: {
		getMenuActual: (state) => state.menu_views[state.menu_actual],
	},

	actions: {
		loadPosts(store) {
			fetch("http://localhost:9000/posts")
				.then((r) => r.json())
				.then((data) => store.commit("setPostList", data));
		},

		setCurrentPost(store, id) {
			const p = store.state.post_list.find((val) => val.id == id);

			store.commit("changeActualPost", p);
		},
	},

	modules: {},
});
