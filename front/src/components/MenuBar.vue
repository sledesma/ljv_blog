<template>
	<nav>
		<div class="nav-item" v-for="item in items" v-bind:key="item.id">
			<router-link v-bind:to="item.url">{{ item.name }}</router-link>
		</div>
	</nav>
</template>

<script>
export default {
	computed: {
		items() {
			return this.$store.getters.getMenuActual
		}
	}
};
</script>

<style scoped>
nav {
	text-align: center;
}

nav .nav-item {
	display: inline-block;
	margin: 10px;
	cursor: pointer;
}
</style>
