<template>
  <button
    class="d-button"
    v-on="$listeners"
    v-bind="$attrs"
    :disabled="disabled"
    :type="buttonType"
  >
    <span v-if="this.$scopedSlots.icon" class="icon">
      <slot name="icon"/>
    </span>
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'DButton',
  props: {
    buttonType: {
      type: String,
      default: 'button'
    }
  },
  data () {
    return { disabled: false }
  },
  mounted () {
    this.disabled = this.$el.classList.contains('inactive')
  }
}
</script>

<style lang="less">
@import "./d-button";
</style>
