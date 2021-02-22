<template>
  <div class="page-users">用户详情页面-{{ id }}</div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
