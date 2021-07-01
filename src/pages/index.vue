<template>
  <div class="page page-index">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <button class="btn">submit</button>
  </div>

  <input type="text" class="form-item" />
  <div class="grid grid-cols-6 gap-4">
    <div class="w-full h-52 bg-purple-600 p-md text-gray-200">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>

    <div class="w-full h-52 bg-purple-600">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>

    <div class="w-full h-52 bg-purple-600">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">1</div>
    <div class="w-full h-52 bg-purple-600">9</div>
    <div class="w-full h-52 bg-purple-600">9</div>
  </div>
</template>
<script>
  import { useRouter } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'index',
    components: {
      HelloWorld,
    },
    setup() {
      const router = useRouter()
      console.log(router)
    },
  }
</script>

<style scoped>
  .page {
    background-image: url('@/assets/img/logo.png');
    background-repeat: no-repeat;
  }
  .btn {
    @apply bg-dark-900  text-white px-md py-sm m-sm rounded-xl;
  }
</style>
