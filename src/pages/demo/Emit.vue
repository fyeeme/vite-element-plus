<template>
  <div class="p-md">
    <SearchBar @search="onSearch" placeholder="请输入名称" />
  </div>
</template>

<script>
  // import SearchBar from '@/components/SearchBar.1.vue'

  export default {
    // components: {
    //   SearchBar,
    // },
    setup() {
      const onSearch = (e) => {
        console.log(e)
      }
      return {
        onSearch,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: home
</route>
