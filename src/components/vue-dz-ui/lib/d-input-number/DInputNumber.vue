<template>
  <div class="d-input-number" :class="{active: active, filled: filled}">
    <span class="minus" @click="minus" :class="{disabled: disabledMinus}"></span>
    <div class="d-input-number-wrap">
      <div class="d-input-placeholder">{{ placeholder }}</div>
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
    <span class="plus" @click="plus" :class="{disabled: disabledPlus}"></span>
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
    },
    // 最小值限制
    min: {
      type: [Boolean, Number],
      default: false
    },
    // 最大值限制
    max: {
      type: [Boolean, Number],
      default: false
    },
    // 精度控制
    precision: {
      type: [Boolean, Number],
      default: false
    }
  },
  data () {
    return {
      // 激活的（placeholder上移）
      active: false,
      // 有值 & 失去焦点（placeholder保持上移, 边框变灰）
      filled: true,
      // 用来 避免直接更改 props(value) 的替身
      currentVal: undefined,
      // 超出限制，禁止点击
      disabledPlus: false,
      disabledMinus: false
    }
  },
  created () {
    // 根据有无值判断input是否激活状态
    this.setActive()
    this.init()
  },
  watch: {
    value () {
      // 根据有无值判断input是否激活状态
      this.setActive()
      this.init()
    }
  },
  methods: {
    // 初始操作
    init () {
      if (isNumber(this.value)) {
        this.currentVal = this.value
        this.setBtnDisabled(this.value)
      }
    },
    // 设置按钮的禁用状态
    setBtnDisabled (Val) {
      if (typeof this.min !== 'number' && typeof this.max !== 'number') {
        return
      }

      if (isNumber(this.min)) {
        this.disabledMinus = Val <= this.min
      }

      if (isNumber(this.max)) {
        this.disabledPlus = Val >= this.max
      }
    },
    // 如果输入的值超出范围，则返回指定的最大或最小值
    getRangeVal (val) {
      if (typeof this.min !== 'number' && typeof this.max !== 'number') {
        return val
      }

      const num = val

      // 分三种情况分别判断
      if (typeof this.min === 'number' && typeof this.max === 'number') {
        if (num <= this.min && num >= this.max) {
          return num
        } else if (num > this.max) {
          return this.max
        } else if (num < this.min) {
          return this.min
        }
      }

      if (typeof this.min === 'number') {
        return num >= this.min ? num : this.min
      }

      if (typeof this.max === 'number') {
        return num <= this.max ? num : this.max
      }
    },
    setActive () {
      this.active = isNumber(this.value) || isNumber(this.currentVal)
    },
    setZero () {
      // 传入的 value 为 falsy 值时，转换成 0 避免出现 NaN 计算结果
      !isNumber(this.currentVal) && (this.currentVal = getNumber(this.currentVal))
    },
    plus () {
      if (this.disabledPlus) {
        return
      }
      this.setZero()
      this.currentVal = NP.plus(this.currentVal, this.step)
      this.setBtnDisabled(this.currentVal)
      this.$emit('input', this.currentVal)
      this.setActive()
    },
    minus () {
      if (this.disabledMinus) {
        return
      }
      this.setZero()
      this.currentVal = NP.minus(this.currentVal, this.step)
      this.setBtnDisabled(this.currentVal)
      this.$emit('input', this.currentVal)
      this.setActive()
    },
    focusHandler ($event) {
      this.active = true
      this.filled = false

      this.$emit('focus')
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

      this.$emit('blur', this.getRangeVal(getNumber(this.currentVal)))
      this.$emit('input', this.getRangeVal(getNumber(this.currentVal)))
    },
    inputHandler ($event) {
      // 输入框内容为‘空字符串’时，失焦后使 placeholder 复位
      if (isEmptyStr($event.target.value)) {
        this.currentVal = undefined
        this.$emit('input', undefined)
      } else {
        // FIXME 不能输入 负号
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
