<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <el-button icon="el-icon-success" type="primary" @click="state.count++">
    count is: {{ state.count }}
  </el-button>

  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: true,
      },
    },

    setup() {
      const state = reactive({ count: 0 })
      return { state }
    },
  }
</script>

<style lang="scss" scoped>
  a {
    color: #42b983;
  }
</style>
