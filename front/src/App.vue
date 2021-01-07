<template>
	<div>
		<banner></banner>
		<menu-bar v-bind:items="elems"></menu-bar>
		<main>
			<!-- Contenido de cada vista aquí -->
			<post-list></post-list>
		</main>
	</div>
</template>

<script>
import Banner from "./components/Banner.vue";
import MenuBar from "./components/MenuBar.vue";

// Imports temporales, de prueba
import PostList from "./components/PostList.vue";

export default {
	data() {
		return {
			elems: [
				{ id: 1, name: "Item", url: "#" },
				{ id: 2, name: "Item", url: "#" },
				{ id: 2, name: "Item", url: "#" },
			],
		};
	},

	components: {
		Banner,
		MenuBar,
		PostList,
	},

	created() {
		this.$store.dispatch('loadPosts');
	}
};
</script>