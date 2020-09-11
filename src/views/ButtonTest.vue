<template>
  <d-section title="Button" class="button-wrapper">
    <d-button @click="clickHandler" class="cta" title="CTA">CTA</d-button>
    <d-button @click="clickHandler2" class="primary" title="Primary">PRIMARY</d-button>
    <d-button @click="clickHandler3" class="secondary" title="Secondary">SECONDARY</d-button>
    <d-button @click="clickHandler" class="inactive" title="Secondary">INACTIVE</d-button>
  </d-section>
</template>

<script>
export default {
  name: 'ButtonTest',
  methods: {
    clickHandler () {
      this.$message({
        msg: '你点击了按钮！',
        duration: 2000
      })
    },
    clickHandler2 () {
      this.$message({
        type: 'warning',
        msg: '你点击了按钮！',
        duration: 2000
      })
    },
    clickHandler3 () {
      this.$message({
        type: 'error',
        msg: '你点击了按钮！',
        duration: 2000
      })
    }
  }
}
</script>

<style scoped>
.button-wrapper > button {
  margin: 10px;
}
</style>
