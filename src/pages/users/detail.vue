<template>
  <div class="page-users">用户详情页面-{{ id }}</div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    console.log(router)
    let id = ref(null)
    onMounted(() => {
      id.value = route.params.id
      console.log(id)
    })
    return {
      id
    }
  }
}
</script>
