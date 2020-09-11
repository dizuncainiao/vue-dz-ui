<template>
  <div class="d-select" :class="{active: active, filled: filled}">
    <div class="d-select-placeholder">{{ placeholder }}</div>
    <input
      ref="input"
      :value="currentValue"
      type="text"
      readonly
      @focus="focusHandler"
      @blur="blurHandler"
    >
    <div class="down-arrow" :class="{open: open}">
      <img
        src="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9vcmFuZ2Vfc21hbGwtYXJyb3ctZG93biIgZGF0YS1uYW1lPSJpY29uL29yYW5nZS9zbWFsbC1hcnJvdy1kb3duIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4NCiAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0wLDAsMTAsMTAsMjAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQgMTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZTc4MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg0K"
        alt="">
    </div>

    <transition name="fade">
      <div class="d-select-list" v-show="open">
        <ul>
          <li
            v-for="item of options"
            :class="{active: currentValue === item.value, disabled: item.disabled}"
            :key="item.value"
            @click="clickHandler(item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DSelect',
  props: {
    // 值
    value: String,
    // 占位符
    placeholder: String,
    // 下拉项数据
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 激活的（placeholder上移）
      active: false,
      // 有值 & 失去焦点
      filled: true,
      // 当前选中的值
      currentValue: undefined,
      // 打开下拉项
      open: false,
      timer: null
    }
  },
  watch: {
    value: {
      handler () {
        // 根据有无值判断input是否激活状态
        this.active = !!this.value
        this.currentValue = this.value
      },
      immediate: true
    }
  },
  methods: {
    clickHandler (item) {
      this.filled = true
      this.active = true

      if (item.disabled) return
      this.currentValue = item.value

      this.$emit('input', this.currentValue)
      this.$emit('change', item)
      this.open = false
    },
    // 失焦
    blurHandler ($event) {
      // input无值，在失焦后，取消激活
      const changeStatus = () => {
        if (!this.value) {
          this.active = false
          this.filled = false
        } else {
          this.filled = true
        }
      }

      this.$emit('openChange', {
        value: $event.target.value,
        status: 'close'
      })

      // 避免click不能触发（在聚焦时点击li元素，已经触发了失焦，下拉被隐藏，不能触发li元素事件）
      this.timer = setTimeout(() => {
        changeStatus()
        this.open = false
        clearTimeout(this.timer)
      }, 350)
    },
    // 聚焦
    focusHandler ($event) {
      this.active = true
      this.filled = false

      this.$emit('openChange', {
        value: $event.target.value,
        status: 'open'
      })
      this.open = true
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-select";
</style>
