<template>
  <nav class="navbar">
    <div class="navbar__left">
      <router-link
        class="navbar__item"
        :class="$route.path === '/' ? 'selected' : ''"
        to="/"
      >
        Dashboard
      </router-link>
    </div>
    <div class="navbar__right">
      <router-link
        class="navbar__item navbar__item--plain"
        :class="$route.path === '/edit' ? 'hidden' : ''"
        to="/edit"
      >
        <Button>New Post</Button>
      </router-link>
      <div
        class="navbar__item"
        :class="$route.path !== '/edit' ? 'hidden' : ''"
      >
        <Button
          btnType="danger"
          :onClick="cancelEdit"
        >
          Cancel
        </Button>
        <Button
          btnType="success"
          :onClick="savePost"
        >
          Save
        </Button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    background-color: #fff;
    box-shadow: 0 0 5px $shadowMedium;
    display: flex;
    height: $navbarHeight;
    justify-content: space-between;
    padding: 0 10px;
    position: fixed;
    width: 100%;
    z-index: 5;

    &__item {
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 100%;
      margin: 0;
      padding: 0 10px;
      text-decoration: none;
      transition: background-color .2s ease-in-out;

      &:visited {
        color: initial;
      }

      &:hover, &.selected {
        color: $info;
      }

      &--plain {
        padding: 0;
        &:hover {
          background-color: initial;
        }
      }

      &.hidden {
        display: none;
      }
    }
  }
</style>

<script>
import Button from './Button.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  components: {
    Button
  },
  methods: mapActions([
    'cancelEdit',
    'savePost'
  ]),
}
</script>
