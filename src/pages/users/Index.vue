<template>
  <div class="page-users">
    用户列表页面
    <button @click="getData">获取用户数据</button>
    <button @click="createData">创建用户数据</button>
    <div class="list" v-if="content.id">
      <p>id: {{ content.id }}</p>
      <p>name: {{ content.name }}</p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { contentApi } from '../../api/cms'
export default {
  setup() {
    let content = ref({})
    const getData = () => {
      contentApi.get(1).then((res) => {
        content.value = res.data
        console.log(content)
      })
    }
    const createData = () => {
      contentApi.create({ name: 'vite' }).then(
        (res) => {
          console.log('access is allowed!')
        },
        (err) => {
          console.warn('access is denied')
        }
      )
    }
    return { content, createData, getData }
  }
}
</script>
