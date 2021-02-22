<template>
  <div class="page page-index">
    <router-link to="/users">To Users page</router-link>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  setup() {
    const router = useRouter()
    console.log(router)
  }
}
</script>
