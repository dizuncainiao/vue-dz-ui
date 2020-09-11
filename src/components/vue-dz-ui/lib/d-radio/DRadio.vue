<template>
  <label class="d-radio" :class="{disabled: disabled}">
    <span class="d-radio-input">
      <input
        v-bind="$attrs"
        :disabled="disabled"
        type="radio"
        :checked="checked === $attrs.value"
        @change="$emit('change', $event.target.value)"
      >
      <i></i>
    </span>
    <span class="d-radio-text"><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'DRadio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // 判断 v-model 上绑定的值 和 value 属性一致
    // :checked="checked === $attrs.value"
    checked: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-radio";
</style>
