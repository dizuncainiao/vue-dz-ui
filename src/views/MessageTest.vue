<template>
  <d-section title="Message" class="button-wrapper">
    <d-button @click="clickHandler" class="cta" title="CTA">success</d-button>
    <d-button @click="clickHandler2" class="primary" title="Primary">warning</d-button>
    <d-button @click="clickHandler3" class="secondary" title="Secondary">error</d-button>
  </d-section>
</template>

<script>
export default {
  name: 'MessageTEst',
  methods: {
    clickHandler () {
      this.$message.success('函数式调用', 1000)
    },
    clickHandler2 () {
      this.$message({
        type: 'warning',
        msg: '传入 option 对象',
        duration: 1000
      })
    },
    clickHandler3 () {
      this.$message.error('警告！！', 1000)
    }
  }
}
</script>

<style scoped>
.button-wrapper > button {
  margin: 10px;
}
</style>
