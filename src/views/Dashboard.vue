<template>
  <div class="dashboard">
      <PostPreview
        v-for="post in posts"
        :post="post"
        :onDelete="() => deletePost(post.id)"
        :onEdit="() => editPost(post.id)"
        :key="post.id"
      />
  </div>
</template>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<script>
import PostPreview from '@/components/PostPreview';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  components: {
    PostPreview
  },
  computed: mapGetters([
    'posts'
  ]),
  methods: mapActions([
    'deletePost',
    'editPost'
  ])
}
</script>
