<template>
  <div>
    <d-section title="Select">
      <div>selected : {{ selectValue }}</div>
      <d-select
        placeholder="一个下拉框"
        v-model="selectValue"
        :options="options"
        @openChange="openChange"
      />
    </d-section>

    <d-section title="Select">
      <div>selected : {{ selectValue2 }}</div>
      <d-select
        placeholder="Dropdown"
        v-model="selectValue2"
        :options="options"
        @openChange="openChange"
        @change="getObj"
      />
    </d-section>
  </div>
</template>

<script>
export default {
  name: 'SelectTest',
  data () {
    return {
      selectValue: '',
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
  mounted () {
    setTimeout(() => {
      this.selectValue2 = 'Select-4'
    }, 300)
  },
  methods: {
    getObj (e) {
      console.log(e)
    },
    openChange (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
