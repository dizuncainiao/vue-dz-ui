<template>
  <d-section title="Button" class="button-wrapper">
    <d-button @click="confirm" class="cta" title="CTA">带 title</d-button>
    <d-button @click="confirm2" class="primary" title="Primary">不带 title</d-button>
  </d-section>
</template>

<script>
export default {
  name: 'MessageTEst',
  methods: {
    confirm () {
      this.$confirm({
        title: '你确认要进行这个操作吗？',
        desc: '<span style="color: red;">这是一段描述，可以是HTML格式的内容。</span>',
        btnText: ['Cancel', 'Ok'],
        onOk: () => {
          this.$message({
            type: 'success',
            msg: '你点击了确定！',
            duration: 2000
          })
        },
        onCancel: () => {
          this.$message({
            type: 'warning',
            msg: '你点击了取消！',
            duration: 2000
          })
        }
      })
    },
    confirm2 () {
      this.$confirm({
        desc: '<span style="color: red;">这是一段描述，可以是HTML格式的内容。</span>',
        btnText: ['取消', '确定'],
        onOk: () => {
          this.$message({
            type: 'success',
            msg: '你点击了确定2！',
            duration: 2000
          })
        },
        onCancel: () => {
          this.$message({
            type: 'warning',
            msg: '你点击了取消2！',
            duration: 2000
          })
        }
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
