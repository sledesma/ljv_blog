<template>
	<div>
        <h1>{{ currentPost.title }}</h1>
        <p>{{ currentPost.body }}</p>
        Subido por el usuario {{ currentPost.userId }}
    </div>
</template>

<script>
export default {

    computed: {
        currentPost() {
            return this.$store.state.post_actual
        }
    },

	created() {
        const id = this.$route.params.id;
        this.$store.dispatch('setCurrentPost', id)
        console.log(this.$store.state.post_actual)

        this.$store.commit('changeActualMenu', 'details')
	},
};
</script>

<style></style>
