<template>
  <div class="d-input" :class="{active: active, filled: filled, 'check-failed': !checkedSuccess && this.active}">
    <div class="d-input-placeholder">{{placeholder}}</div>
    <input
      ref="input"
      :value="value"
      :type="type"
      :readonly="readonly"
      :disabled="disabled"
      @focus="focusHandler"
      @blur="blurHandler"
      @input="inputHandler($event.target.value)"
      @keyup.enter="$emit('pressEnter')"
    >
    <div class="check-status">
      <img v-if="active && checkedSuccess"
           src="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9zdWNjZXNzX2NoZWNrIiBkYXRhLW5hbWU9Imljb24vc3VjY2Vzcy9jaGVjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxwYXRoIGlkPSJQYXRoIiBkPSJNMzIsMCwxMCwyMiwwLDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDEzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTBjZjJiIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+DQo8L3N2Zz4NCg=="
           alt="">
      <img v-if="active && !checkedSuccess"
           src="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9mYWlsdXJlX2Nsb3NlIiBkYXRhLW5hbWU9Imljb24vZmFpbHVyZS9jbG9zZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+DQogIDxwYXRoIGlkPSJQYXRoIiBkPSJNMCwwLDMyLDMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDgpIiBmaWxsPSJub25lIiBzdHJva2U9IiNjZjIzMjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4NCiAgPHBhdGggaWQ9IlBhdGgtMiIgZGF0YS1uYW1lPSJQYXRoIiBkPSJNMzIsMCwwLDMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDgpIiBmaWxsPSJub25lIiBzdHJva2U9IiNjZjIzMjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg0K"
           alt="">
    </div>
    <transition name="fade">
      <div v-if="!checkedSuccess && this.active" class="check-failed-text">
        <template v-if="asyncCheckFailedMsg">{{asyncCheckFailedMsg}}</template>
        <template v-else>{{validator.msg}}</template>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DInput',
  props: {
    // 值
    value: String,
    // 占位符
    placeholder: String,
    // input 类型
    type: {
      type: String,
      default: 'text'
    },
    // 校验对象
    validator: {
      type: Object,
      default () {
        return {
          regexp: null,
          required: false,
          msg: 'Your input doesn\'t check out'
        }
      }
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 激活的（placeholder上移）
      active: false,
      // 有值 & 失去焦点
      filled: true,
      // 校验通过
      checkedSuccess: false,
      // 异步校验返回的msg
      asyncCheckFailedMsg: undefined
    }
  },
  created () {
    // 根据有无值判断input是否激活状态
    this.active = !!this.value
    // 校验默认传入的value
    this.active && this.inputHandler(null, this.value)
  },
  methods: {
    // 强制使校验状态不通过
    forceCheckFailed () {
      this.active = true
      this.checkedSuccess = false
      this.$refs.input.focus()
    },
    /**
       * 异步校验
       * @param checkStatus 校验状态 {Boolean}
       * @param msg
       */
    asyncCheck (checkStatus, msg) {
      if (!checkStatus) {
        this.asyncCheckFailedMsg = msg
        this.checkedSuccess = checkStatus
      }
    },
    // 异步校验失败后，重新输入时重置 异步校验返回的msg
    resetAsyncCheckFailedMsg () {
      this.asyncCheckFailedMsg && (this.asyncCheckFailedMsg = undefined)
    },
    inputHandler ($event, value) {
      const _value = value || $event
      this.resetAsyncCheckFailedMsg()
      this.checkedSuccess = true
      // 非空校验
      this.validator.required && this.requiredCheck(_value)
      // 存在即进行正则校验
      !!this.validator.regexp && this.regularCheck(_value)
      this.$emit('input', _value)
    },
    // 非空校验
    requiredCheck ($event) {
      if ($event) {
        this.checkedSuccess = true
      } else {
        this.checkedSuccess = false
      }
    },
    // 正则校验
    regularCheck ($event) {
      try {
        if (this.validator.regexp.test($event)) {
          this.checkedSuccess = true
        } else {
          this.checkedSuccess = false
        }
      } catch (e) {
        throw new Error('this.validator.regexp must be a RegExp')
      }
    },
    // 失焦
    blurHandler ($event) {
      // input无值，在失焦后，取消激活
      if (!this.value) {
        this.active = false
        this.filled = false
      } else {
        this.filled = true
      }

      this.$emit('blur', $event.target.value)
    },
    // 聚焦
    focusHandler ($event) {
      this.active = true
      this.filled = false

      this.$emit('focus', $event.target.value)
    }
  }
}
</script>

<style scoped lang="less">
@import "./d-input";
</style>
