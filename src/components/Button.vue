<template>
  <button
    class="btn"
    :class="btnType ? `btn-${btnType}` : ''"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .btn {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 5px;
    padding: 10px;
  }

  .btn-default {
    background-color: $info;
    color: #fff;

    &:hover {
      background-color: lighten($info, 10%);
    }

    &:active {
      background-color: darken($info, 5%);
    }
  }

  .btn-danger {
    background-color: $danger;
    color: #fff;

    &:hover {
      background-color: lighten($danger, 10%);
    }

    &:active {
      background-color: darken($danger, 5%);
    }
  }

  .btn-success {
    background-color: $success;
    color: #fff;

    &:hover {
      background-color: lighten($success, 10%);
    }

    &:active {
      background-color: darken($success, 5%);
    }
  }
</style>

<script>
export default {
  name: 'Button',
  props: {
    btnType: {
      type: String,
      default: 'default'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
