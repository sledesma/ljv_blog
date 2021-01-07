<template>
	<div>
		<banner></banner>
		<menu-bar></menu-bar>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import Banner from "./components/Banner.vue";
import MenuBar from "./components/MenuBar.vue";

export default {

	components: {
		Banner,
		MenuBar
	},

	created() {
		this.$store.dispatch('loadPosts');
	}
};
</script>