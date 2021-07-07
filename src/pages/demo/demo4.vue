<template>
  <div>
    <div>Registration closes in <span id="time">0000</span> minutes!</div>
  </div>
</template>

<script>
  import { CountUp } from 'countup.js'
  import { onMounted } from '@vue/runtime-core'
  export default {
    setup() {
      const countUp = () => {
        const countUp = new CountUp('time', 5234)
        if (!countUp.error) {
          countUp.start()
        } else {
          console.error(countUp.error)
        }
      }
      onMounted(() => {
        countUp()
      })
      return {}
    },
  }
</script>

<style lang="scss" scoped></style>
