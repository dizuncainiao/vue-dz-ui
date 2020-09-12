<template>
  <d-section title="Input">
    <d-input
      v-model="user"
      placeholder="USERNAME"
      @focus="focusHandler"
    />
    <div>USERNAME : {{ user }}</div>
    <d-input
      @pressEnter="pressEnter"
      @blur="blurHandler"
      v-model="password"
      placeholder="PASSWORD"
      type="password"
    />
    <div>PASSWORD : {{ password }}</div>
    <d-input
      placeholder="READONLY"
      v-model="readonly"
      :readonly="true"
    />
    <d-input
      placeholder="DISABLED"
      value="disabled"
      :disabled="true"
    />
  </d-section>
</template>

<script>
export default {
  name: 'InputTest',
  data () {
    return {
      user: '',
      password: '',
      readonly: 'readonly'
    }
  },
  mounted () {
    setTimeout(() => {
      this.user = 'zhangsan'
    }, 300)
  },
  methods: {
    focusHandler () {
      this.$message({
        msg: 'input 聚焦'
      })
    },
    pressEnter () {
      this.$message({
        msg: 'input上 按了 Enter 键'
      })
    },
    blurHandler () {
      this.$message({
        msg: 'input 失焦'
      })
    }
  }

}
</script>

<style scoped>

</style>
