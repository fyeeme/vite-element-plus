<template>
  <div></div>
</template>

<script>
  import { contentApi } from '@/api/cms'
  import { reactive, ref } from 'vue'
  export default {
    setup() {
      const form = reactive({
        username: '',
        password: '',
      })
      const msg = 'hello,world' //非响应式
      const initialized = ref(false) //单个属性响应

      const login = () => {
        contentApi.create(form).then((res) => {
          console.log(res)
        })
      }
      return {
        form,
        login,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
