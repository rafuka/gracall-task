<template>
  <div class="blog-post">
    <div class="blog-post__title">
      <h1>{{postData.title}}</h1>
      <div ref="postContent"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // .blog-post {
  //   &__title {
  //     h1 {
  //       text-align: center;
  //     }
  //   }
  // }
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log('BOOM', this.$route.params.id);
  },
  computed: {
    ...mapGetters([
      'getPostById'
    ]),
    postData() {
      return this.getPostById(this.id);
    }
  },
  mounted() {
    const { content } = this.postData;
    this.$refs.postContent.innerHTML = content;
  }
}
</script>
