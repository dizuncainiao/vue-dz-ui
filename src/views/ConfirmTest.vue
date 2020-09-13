<template>
  <d-section title="Button" class="button-wrapper">
    <d-button @click="clickHandler" class="cta" title="CTA">CTA</d-button>
    <d-button @click="clickHandler2" class="primary" title="Primary">PRIMARY</d-button>
    <d-button @click="clickHandler3" class="secondary" title="Secondary">SECONDARY</d-button>
  </d-section>
</template>

<script>
export default {
  name: 'MessageTEst',
  methods: {
    clickHandler () {
    },
    clickHandler2 () {
    },
    clickHandler3 () {
    }
  }
}
</script>

<style scoped>

</style>
