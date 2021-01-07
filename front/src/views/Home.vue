<template>
  <post-list></post-list>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
    components: {
        PostList
    },

    created() {
      this.$store.commit('changeActualMenu', 'home')
    }
}
</script>

<style>

</style>