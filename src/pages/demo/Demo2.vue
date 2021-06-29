<template>
  <div> </div>
</template>

<script>
  import { contentApi } from '@/api/cms'
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      login() {
        contentApi.create(this.form).then((res) => {
          console.log(res)
        })
      },
    },
  }
</script>

<style lang="scss" scoped></style>
