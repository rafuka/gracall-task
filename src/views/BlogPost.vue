<template>
  <div class="blog-post">
    <div
      class="blog-post__bg"
      v-if="postData.imgUrl"
      :style="postData.imgUrl ? `background-image: url(${postData.imgUrl})` : ''"
    />
    <h1 class="blog-post__title">{{postData.title}}</h1>
    <div class="blog-post__content" ref="postContent"></div>
  </div>
</template>

<style lang="scss" scoped>
  .blog-post {
    &__bg {
      @include post-title;
      min-height: 300px;
      margin: -$mainContentPadding;
    }

    &__title {
      font-family: $mainFont;
      font-size: 2.6rem;
      margin-top: 2*$mainContentPadding;
      text-align: center;
    }

    &__content {
      font-family: $postContentFont;
    }
  }
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
  },
}
</script>
