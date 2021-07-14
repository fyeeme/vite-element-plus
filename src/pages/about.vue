<template>
  <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
  <div class="page page-about">hello ,about</div>
</template>

<script>
  export default {
    name: 'about',
    setup() {},
  }
</script>

<style lang="scss" scoped>
  .page {
    .tabs {
      width: 500px;
      margin: 0 auto;
    }
  }
</style>
