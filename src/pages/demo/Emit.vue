<template>
  <SearchBar @search="onSearch" placeholder="请输入名称" />
</template>

<script>
  import SearchBar from '@/components/SearchBar.vue'

  export default {
    components: {
      SearchBar,
    },
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
