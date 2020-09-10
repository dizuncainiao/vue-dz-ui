<template>
  <section class="d-section">
    <span class="title" :style="titleStyle">{{title}}</span>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'DSection',
  props: {
    title: String,
    titleStyle: {
      type: Object,
      default () {
        return null
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-section";
</style>
