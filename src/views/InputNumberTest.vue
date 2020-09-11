<template>
  <d-section title="InputNumber">
    <d-input-number
      style="width: 290px;"
      placeholder="Default step"
      v-model="count"
      :min="-2"
      :max="8"
    />
    <div>count : {{ count }}</div>
    <d-input-number
      style="width: 290px;"
      placeholder="Step 0.1"
      :step="0.1"
      :min="-2"
      v-model="count2"
    />
    <div>count2 : {{ count2 }}</div>
    <d-input-number
      style="width: 290px;"
      placeholder="Step 10"
      :step="10"
      :max="8"
      v-model="count3"
    />
    <div>count2 : {{ count3 }}</div>
  </d-section>
</template>

<script>
export default {
  name: 'InputNumberTest',
  data () {
    return {
      count: 0,
      count2: undefined,
      count3: undefined
    }
  }
}
</script>

<style scoped>

</style>
