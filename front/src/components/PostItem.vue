<template>
	<div class="post">
		<div class="post-title">Titulo del Post</div>
		<div class="post-desc">Descripcion del Post</div>
		<div class="post-action">
			<a href="detalle.html">Ver más</a>
		</div>
	</div>
</template>

<script>
export default {};
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
