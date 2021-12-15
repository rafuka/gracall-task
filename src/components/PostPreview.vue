<template>
  <div class="post-preview">
    <ContextMenu
      :items="[
        {
          name: 'Edit',
          action: onEdit,
          icon: 'edit'
        },
        {
          name: 'Delete',
          action: onDelete,
          icon: 'trash'
        }
      ]"
    />
    <router-link
      :to="{ name: 'Post', params: { id: post.id } }"
      :key="post.id"
      class="post-link"
    >
      <div
        class="post-preview__title"
        :style="post.imgUrl ? `background-image: url(${post.imgUrl})` : ''"
      >
        <div
          v-if="post.imgUrl"
          class="post-preview__title-overlay"
        />
        <h2 :style="!post.imgUrl ? 'color: #000;' : ''">
          {{post.title}}
        </h2>
      </div>
      <div class="post-preview__snippet" ref="snippet">
        <!-- Post content is injected as HTML -->
      </div>
      <div class="post-preview__snippet-overlay" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .post-preview {
    border-radius: 5px;
    box-shadow: 0 0 5px $shadowMedium;
    cursor: pointer;
    margin: 20px;
    width: 300px;
    height: 400px;
    overflow: hidden;
    position: relative;
    transition: box-shadow .2s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 15px -2px $shadowMedium;
    }

    &__title {
      @include post-title;
      min-height: 150px;
      position: relative;

      h2 {
        color: #fff;
        font-family: $mainFont;
        font-size: 2rem;
        margin: 5px;
        text-align: center;
        z-index: 2;
      }
    }

    &__title-overlay {
      background-color: rgba(0,0,0,.6);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    &__snippet {
      font-family: $postContentFont;
      padding: 10px;
    }

    &__snippet-overlay {
      background-image: linear-gradient(to top, rgba(#fff, .9) 35%, transparent);
      bottom: 0;
      height: 45px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  .post-link {
    text-decoration: none;
    color: initial;
  }
</style>

<script>
import ContextMenu from './ContextMenu';

export default {
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      default: () => ({})
    },
    onDelete: {
      type: Function,
      default: () => {}
    },
    onEdit: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    const { content } = this.post;
    this.$refs.snippet.innerHTML = content;
  },
  components: {
    ContextMenu
  }
}
</script>
