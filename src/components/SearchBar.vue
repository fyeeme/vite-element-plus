<template>
  <div>
    <input
      class="border border-black mr-2 rounded"
      type="text"
      :placeholder="placeholder"
      v-model="name"
    />
    <button
      class="rounded text-gray-400 border bg-purple-100 border-black text-md px-6 py-2"
      @click="onSubmit"
    >
      <icon-mdi-light-arrow-down-circle />查询
      <icon-mdi-format-line-weight class="text-yellow-700 text-xl" />
    </button>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { defineEmits, defineProps } from '@vue/runtime-core'

  const props = defineProps({
    placeholder: {
      type: String,
      default: 'name',
    },
  })
  const emit = defineEmits(['search'])
  const name = ref(null)
  const onSubmit = () => {
    emit('search', name.value)
  }
</script>

<style lang="scss" scoped></style>
