<template>
  <div class="d-input-number" :class="{active: active, filled: filled}">
    <span class="plus" @click="minus"></span>
    <div class="d-input-number-wrap">
      <div class="d-input-placeholder">{{placeholder}}</div>
      <input
        ref="input"
        :value="value"
        type="text"
        :readonly="readonly"
        :disabled="disabled"
        @focus="focusHandler"
        @blur="blurHandler"
        @input="inputHandler"
      >
    </div>
    <span class="minus" @click="plus"></span>
  </div>
</template>

<script>
import NP from 'number-precision'
import { isNumber, getNumber, isEmptyStr } from '../utils/utils'

export default {
  name: 'DInputNumber',
  props: {
    value: Number,
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 每次改变步数，可以为小数
    step: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      // 激活的（placeholder上移）
      active: false,
      // 有值 & 失去焦点（placeholder保持上移, 边框变灰）
      filled: true,
      currentVal: undefined
    }
  },
  created () {
    // 根据有无值判断input是否激活状态
    this.setActive()
    isNumber(this.value) && (this.currentVal = this.value)
  },
  methods: {
    setActive () {
      this.active = isNumber(this.value) || isNumber(this.currentVal)
    },
    setZero () {
      // 传入的 value 为 falsy 值时，转换成 0 避免出现 NaN 计算结果
      !isNumber(this.currentVal) && (this.currentVal = getNumber(this.currentVal))
    },
    plus () {
      this.setZero()
      this.currentVal = NP.plus(this.currentVal, this.step)
      this.$emit('input', this.currentVal)
      this.setActive()
    },
    minus () {
      this.setZero()
      this.currentVal = NP.minus(this.currentVal, this.step)
      this.$emit('input', this.currentVal)
      this.setActive()
    },
    focusHandler ($event) {
      this.active = true
      this.filled = false

      this.$emit('focus', getNumber($event.target.value))
    },
    blurHandler ($event) {
      // input无值，在失焦后，取消激活（加入定时器，避免在空字符时点击箭头，触发 ’缩小 -> 放大 -> 缩小‘）
      setTimeout(() => {
        if (!isNumber(this.value)) {
          this.active = false
          this.filled = false
        } else {
          this.active = true
          this.filled = true
        }
      }, 300)

      this.$emit('blur', getNumber($event.target.value))
    },
    inputHandler ($event) {
      // 输入框内容为‘空字符串’时，失焦后使 placeholder 复位
      if (isEmptyStr($event.target.value)) {
        this.currentVal = undefined
        this.$emit('input', undefined)
      } else {
        this.currentVal = getNumber($event.target.value)
        this.$emit('input', getNumber($event.target.value))
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-input-number";
</style>
