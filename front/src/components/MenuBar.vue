<template>
	<nav>
		<div class="nav-item" v-for="item in items" v-bind:key="item.id">
			<a v-bind:href="item.url">{{ item.name }}</a>
		</div>
	</nav>
</template>

<script>
export default {
	props: {
		items: Array
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
