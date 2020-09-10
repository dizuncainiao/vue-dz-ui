<template>
  <d-section title="Button" class="button-wrapper">
    <d-button @click="clickBtn" class="cta" title="CTA">CTA</d-button>
    <d-button @click="clickBtn2" class="primary" title="Primary">PRIMARY</d-button>
    <d-button @click="clickBtn2" class="secondary" title="Secondary">SECONDARY</d-button>
    <d-button @click="clickBtn" class="inactive" title="Secondary">INACTIVE</d-button>
  </d-section>
</template>

<script>
export default {
  name: 'ButtonTest',
  methods: {
    clickBtn () {
      this.$message({
        msg: '你点击了按钮！',
        duration: 2000
      })
    },
    clickBtn2 () {
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
