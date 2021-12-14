<template>
  <div class="post-preview">
    <div
      class="post-preview__title"
      :style="post.imgUrl ? `background-image: url(${post.imgUrl})` : ''"
    >
      <div
        class="post-preview__menu"
        v-click-outside="closeMenu"
      >
        <fa-icon
          icon="ellipsis-v"
          class="post-preview__menu-btn"
          @click="toggleMenu"
        />
        <ul
          v-if="menuOpen"
          class="menu-list"
        >
          <li
            class="menu-list__item"
            @click="onEdit"
          >
            <fa-icon icon="edit" /> Edit
          </li>
          <li
            class="menu-list__item"
            @click="onDelete"
            id="delete-btn"
          >
            <fa-icon icon="trash" /> Delete
          </li>
        </ul>
      </div>
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
      align-items: center;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      min-height: 150px;
      position: relative;

      h2 {
        color: #fff;
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

    &__menu-btn {
      color: rgba(#000, .7);
      font-weight: bold;
      font-size: 25px;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 8px;
      width: 25px;
      z-index: 3;

      .post-preview:hover & {
        opacity: 1;
      }

      &:hover {
        color: $info;
      }
    }
  }

  .menu-list {
    background-color: white;
    border-radius: 4px;
    box-shadow: -2px 2px 3px $shadowLight;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;

    &__item {
      padding: 10px 20px;

      &:hover {
        background-color: rgba(#000, .2);
      }

      &#delete-btn {
        &:hover {
          color: $danger;
        }
      }
    }
  }
</style>

<script>
// import Vue from 'vue';

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
  data() {
    return {
      menuOpen: false
    }
  },
  mounted() {
    const { content } = this.post;
    this.$refs.snippet.innerHTML = content;
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>
