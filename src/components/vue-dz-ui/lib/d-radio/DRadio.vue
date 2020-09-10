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
