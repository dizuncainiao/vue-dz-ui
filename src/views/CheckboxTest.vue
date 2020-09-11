<template>
  <d-section title="Checkbox">
    <d-checkbox v-model="checked" @change="checkboxChange">
      Checked it out
    </d-checkbox>
    <div>checked : {{ checked }}</div>
    <d-checkbox disabled>
      Disabled
    </d-checkbox>
  </d-section>
</template>

<script>
export default {
  name: 'CheckboxTest',
  data () {
    return {
      checked: false,
      checked2: false
    }
  },
  methods: {
    checkboxChange (e) {
      this.$message({
        msg: `选中状态为：${e}`
      })
    }
  }
}
</script>

<style scoped>

</style>
