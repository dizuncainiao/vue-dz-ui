<template>
  <d-section title="Button" class="button-wrapper">
    <d-button @click="clickHandler" class="cta" title="CTA">CTA</d-button>
    <d-button @click="clickHandler2" class="primary" title="Primary">PRIMARY</d-button>
    <d-button @click="clickHandler3" class="secondary" title="Secondary">SECONDARY</d-button>
    <d-button @click="clickHandler" class="inactive" title="Secondary">
      <template #icon>
        <img src="@/assets/img/plus.svg" alt="">
      </template>
      INACTIVE
    </d-button>
    <br>
    <d-button @click="confirm" class="cta" title="CTA">Confirm</d-button>
    <d-button @click="confirm2" class="cta" title="CTA">Confirm2 - 不传入title</d-button>
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
    },
    confirm () {
      this.$confirm({
        title: '你确认要进行这个操作吗？',
        desc: '<span style="color: red;">这是一段描述，可以是HTML格式的内容。</span>',
        btnText: ['Cancel', 'Ok']
      }).then(() => {
        this.$message({
          type: 'success',
          msg: '你点击了确定！',
          duration: 2000
        })
      }).catch(() => {
        this.$message({
          type: 'warning',
          msg: '你点击了取消！',
          duration: 2000
        })
      })
    },
    confirm2 () {
      this.$confirm({
        desc: '<span style="color: red;">这是一段描述，可以是HTML格式的内容。</span>',
        btnText: ['取消', '确定']
      }).then(() => {
        this.$message({
          type: 'success',
          msg: '你点击了确定！',
          duration: 2000
        })
      }).catch(() => {
        this.$message({
          type: 'warning',
          msg: '你点击了取消！',
          duration: 2000
        })
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
