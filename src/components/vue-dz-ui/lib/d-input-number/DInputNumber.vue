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
    // 允许字符串，是因为在输入负数的时候，输入 ‘-’ 其实是字符串类型的。输入不做数字校验和转换，只在失焦的时候做
    value: [Number, String],
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
    // 最小值限制（ps：默认给个布尔类型，是为了设置默认值 false 用来判断的）
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
      currentVal: '',
      // 超出限制，禁止点击
      disabledPlus: false,
      disabledMinus: false
    }
  },
  watch: {
    value: {
      handler () {
        // 根据有无值判断input是否激活状态
        this.setActive()
        this.init()
      },
      // 在初始化时立即侦听，否则需要在 created 中再调一遍上面的代码
      immediate: true
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
      if (!isNumber(this.min) && !isNumber(this.max)) {
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
      if (!isNumber(this.min) && !isNumber(this.max)) {
        return val
      }

      const num = val

      // 分三种情况分别判断
      if (isNumber(this.min) && isNumber(this.max)) {
        // 两者之间，返回原值
        if (num >= this.min && num <= this.max) {
          return num
        } else if (num > this.max) {
          // 大于 max，返回 max
          return this.max
        } else if (num < this.min) {
          // 小于 min,返回 min
          return this.min
        } else {
          // 非数值
          return (this.max + this.min) / 2
        }
      }

      if (isNumber(this.min) && !isNumber(this.max)) {
        return num >= this.min ? num : this.min
      }

      if (isNumber(this.max) && !isNumber(this.min)) {
        return num <= this.max ? num : this.max
      }
    },
    // 设置激活状态，只要输入框中有值即可，不论是否是 数值
    setActive () {
      try {
        this.active = this.value.toString().length || this.currentVal.toString().length
      } catch (e) {
        this.active = !1
      }
    },
    // 设置默认值。当前数字框处于未激活状态时，分以下4中情况取值
    setZero () {
      // 传入的 value 为 falsy 值时，转换成 0 避免出现 NaN 计算结果
      if (!isNumber(this.currentVal)) {
        // 如果 min 和 max 都存在，取中间值
        if (isNumber(this.min) && isNumber(this.max)) {
          this.currentVal = (this.min + this.max) / 2
        }
        // 如果 min 和 max 都不存在，取 0
        if (!isNumber(this.min) && !isNumber(this.max)) {
          this.currentVal = 0
        }
        // 如果只有 min，取 0 （PS：从0开始加减，感觉体验更为自然一点）
        if (isNumber(this.min) && !isNumber(this.max)) {
          this.currentVal = 0
        }
        // 如果只有 max, 0
        if (isNumber(this.max) && !isNumber(this.min)) {
          this.currentVal = 0
        }
      }
    },
    plus () {
      if (this.disabledPlus) {
        return
      }
      this.setZero()
      this.currentVal = NP.plus(this.currentVal, this.step)
      this.setBtnDisabled(this.currentVal)
      this.$emit('input', this.getRangeVal(this.currentVal))
      this.setActive()
    },
    minus () {
      if (this.disabledMinus) {
        return
      }
      this.setZero()
      this.currentVal = NP.minus(this.currentVal, this.step)
      this.setBtnDisabled(this.currentVal)
      this.$emit('input', this.getRangeVal(this.currentVal))
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
        this.currentVal = ''
        this.$emit('input', this.currentVal)
        this.$refs.input.blur()
      } else {
        this.currentVal = $event.target.value
        this.$emit('input', this.currentVal)
      }
    }
  }
}

/**
 * 一、因为是数字输入框，可能会输入 ‘-’， ‘2.’，所以输入的时候不做非数字转换，否则会导致负数和小数点被干掉
 * 二、一律在失焦的时候使用 parseFloat，将 ‘123abc’ => 123  不能转为数字的值 =>  ''
 */
</script>

<style scoped lang="less">
@import "./d-input-number";
</style>
