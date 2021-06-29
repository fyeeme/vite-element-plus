<template>
  <div>
    <input
      class="w-20 border border-black mr-2 rounded"
      type="text"
      :placeholder="placeholder"
      v-model="name"
    />
    <button class="rounded text-gray-400 border border-black text-sm px-4 py-1" @click="onSubmit"
      >查询</button
    >
  </div>
</template>

<script>
  import { ref } from '@vue/reactivity'
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'name',
      },
    },
    emits: ['search'],
    setup(props, context) {
      const name = ref(null)
      const onSubmit = () => {
        context.emit('search', name.value)
      }
      return {
        name,
        onSubmit,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
