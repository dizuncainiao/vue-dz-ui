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
    // v-model 则天然具有 radio 框的 name 特性，相同类型的 radio 绑定 相同的值，即可分为同组的 radio 框。
    // 判断 v-model 上绑定的值 和 $attrs.value 属性一致，则被选中
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
