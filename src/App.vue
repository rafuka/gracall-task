<template>
  <div>
    <Navbar />
    <router-view class="view main-content"></router-view>
  </div>
</template>

<style lang="scss" scoped>
  .main-content {
    padding: 60px 30px;
  }
</style>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
