<template>
  <d-section title="Radio">
    <d-radio v-model="checked" value="Radio">
      Radio
    </d-radio>
    <d-radio v-model="checked" value="Radio2">
      Radio2
    </d-radio>
    <d-radio v-model="checked" value="Radio3" disabled>
      Radio3
    </d-radio>
    <div>checked : {{ checked }}</div>
  </d-section>
</template>

<script>
export default {
  name: 'RadioTest',
  data () {
    return {
      checked: 'Radio'
    }
  }
}
</script>

<style scoped>

</style>
