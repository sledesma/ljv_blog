<template>
	<div>
        <post-item v-for="p in posts" v-bind:key="p.id"></post-item>
	</div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {

    computed: {
        posts() {
            return this.$store.state.post_list
        }
    },

    components: { PostItem },
  
};
</script>

<style></style>
