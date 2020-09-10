<template>
  <div>
    <d-section title="Select">
      <d-select
        placeholder="Dropdown"
        v-model="selectValue"
        :options="options"
        @openChange="openChange"
      />
      <div>selected : {{ checked4 }}</div>
    </d-section>

    <d-section title="Select">
      <d-select
        placeholder="Dropdown"
        v-model="selectValue2"
        :options="options"
        @openChange="openChange"
      />
      <div>selected : {{ checked5 }}</div>
    </d-section>
  </div>
</template>

<script>
export default {
  name: 'SelectTest',
  data () {
    return {
      selectValue: 'Select-1',
      selectValue2: '',
      options: [
        {
          value: 'Select-1',
          label: 'Select 1'
        },
        {
          value: 'Select-2',
          label: 'Select 2',
          disabled: true
        },
        {
          value: 'Select-3',
          label: 'Select 3'
        },
        {
          value: 'Select-4',
          label: 'Select 4'
        },
        {
          value: 'Select-5',
          label: 'Select 5'
        },
        {
          value: 'Select-6',
          label: 'Select 6'
        }
      ]
    }
  },
  methods: {
    openChange (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
