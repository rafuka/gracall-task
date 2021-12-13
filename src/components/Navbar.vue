<template>
  <nav class="navbar">
    <router-link class="navbar__item" to="/">Dashboard</router-link>
    <router-link class="navbar__item" to="/edit">New Post</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .navbar {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    display: flex;
    height: 40px;
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

      &:hover {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }
</style>

<script>
export default {
  name: 'Navbar'
}
</script>
