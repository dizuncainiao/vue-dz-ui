<template>
  <label class="d-checkbox" :class="{disabled: disabled}">
    <span class="d-checkbox-input">
      <input
        :disabled="disabled"
        type="checkbox"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
      >
      <i></i>
    </span>
    <span class="d-checkbox-text"><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'DCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-checkbox";
</style>
