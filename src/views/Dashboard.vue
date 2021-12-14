<template>
  <div class="dashboard">
    <router-link
      v-for="post in posts"
      :to="{ name: 'Post', params: { id: post.id } }"
      :key="post.id"
      class="post-link"
    >
      <PostPreview
        :post="post"
        :onDelete="() => deletePost(post)"
        :onEdit="() => editPost(post)"
      />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .post-link {
    text-decoration: none;
    color: initial;
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
