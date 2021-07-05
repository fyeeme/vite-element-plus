<template>
  <div class="p-md">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <button class="btn">submit</button>

    <input type="text" class="form-item" size="md" />
    <div class="grid grid-cols-2 gap-4 w-200 mx-auto">
      <div class="w-full h-52 bg-purple-600 p-md text-gray-200">1</div>
      <div class="w-full h-52 bg-purple-600">9</div>
      <div class="w-full h-52 bg-purple-600">9</div>
      <div class="w-full h-52 bg-purple-600">1</div>
    </div>
    <div class="text-center sm:text-left">hello</div>
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
  /* .btn {
    @apply bg-dark-900  text-white px-md py-sm m-sm rounded-xl;
  } */
  .btn {
    @apply px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  }
</style>
