<template>
	<div class="post">
		<div class="post-title">{{ title }}</div>
		<div class="post-desc">{{ desc }}</div>
		<div class="post-action">
			<router-link v-bind:to="link">Ver más</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			link: `detalle/${this.id}`
		}
	},

	props: {
		title: String,
		desc: String,
		id: Number
	}
};
</script>

<style>
.post {
	margin: 20px;
	padding: 30px;
	border-bottom: 1px solid black;
}

.post .post-title {
	font-size: 36px;
	font-weight: bold;
}

.post .post-desc {
	margin: 20px;
}

.post .post-action {
	margin: 20px;
}
</style>
