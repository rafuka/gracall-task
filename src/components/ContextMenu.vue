<template>
  <div
    class="context-menu"
    v-click-outside="closeMenu"
  >
    <fa-icon
      icon="ellipsis-v"
      class="context-menu__btn"
      @click="toggleMenu"
    />
    <ul
      v-if="menuOpen"
      class="menu-list"
    >
      <li
        v-for="item in items"
        class="menu-list__item"
        @click="item.action"
        :key="item.name"
        :id="item.name === 'Delete' ? 'delete-btn': ''"
      >
        <fa-icon :icon="item.icon" /> {{item.name}}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .context-menu{
    &__btn {
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
    font-family: $mainFont;
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
        color: $info;
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
export default {
  name: 'ContextMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  },
}
</script>
