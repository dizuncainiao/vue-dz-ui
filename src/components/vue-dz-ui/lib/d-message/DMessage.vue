<template>
  <transition name="move">
    <div class="d-message" :class="[option.type, backTop ? 'backTop': '']" v-if="show">
      <img v-if="option.type === 'success'"
           src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkwNTYyODEzNjQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNTEyYzAgMjgyLjc5NDY2NyAyMjkuMjA1MzMzIDUxMiA1MTIgNTEyczUxMi0yMjkuMjA1MzMzIDUxMi01MTJTNzk0Ljc5NDY2NyAwIDUxMiAwIDAgMjI5LjIwNTMzMyAwIDUxMnogbTc2My4xNzg2NjctMTQ2Ljc3MzMzM2EzMiAzMiAwIDAgMSAwIDQ1LjI2OTMzM2wtMjk0LjE0NCAyOTQuMTg2NjY3YTMxLjkxNDY2NyAzMS45MTQ2NjcgMCAwIDEtMjIuMTQ0IDkuMzg2NjY2IDMxLjg3MiAzMS44NzIgMCAwIDEtMzIuNTEyLTcuODA4TDI3OC42MTMzMzMgNTcwLjQ5NmEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wyMi42MTMzMzQtMjIuNjEzMzMzYTMyIDMyIDAgMCAxIDQ1LjI2OTMzMyAwbDk0LjQyMTMzMyA5NC4yOTMzMzMgMjU0LjM3ODY2Ny0yNTQuMjkzMzMzYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwbDIyLjYxMzMzMyAyMi42MTMzMzN6IiBmaWxsPSIjNTJjNDFhIiBwLWlkPSIyNzA0Ij48L3BhdGg+PC9zdmc+"
           alt="">
      <img v-else
           src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkwNTYyODQ1Mjk1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4xMjI4OCAwLjUwMTc2YzI4Mi40ODA2NCAwIDUxMS4zODU2IDIyOS4wMTc2IDUxMS4zODU2IDUxMS40OTgyNHYwLjEyMjg4Yy0wLjEzMzEyIDI4Mi40ODA2NC0yMjkuMTYwOTYgNTExLjM4NTYtNTExLjYzMTM2IDUxMS4zODU2LTI4Mi40ODA2NCAwLTUxMS4zODU2LTIyOS4xNjA5Ni01MTEuMzg1Ni01MTEuNjMxMzZDMC41MDE3NiAyMjkuMzk2NDggMjI5LjY2MjcyIDAuNDkxNTIgNTEyLjEzMzEyIDAuNDkxNTJ6TTQ4OC4wODk2IDYxNS4zMjE2aDQ3LjgyMDhhMTEuMTYxNiAxMS4xNjE2IDAgMCAwIDEwLjk5Nzc2LTEwLjQ4NTc2TDU2Mi42MzY4IDI2NC4xOTJhMTkuNjMwMDggMTkuNjMwMDggMCAwIDAtMTkuNjkxNTItMjAuNzE1NTJoLTYyLjAyMzY4YTE5LjU1ODQgMTkuNTU4NCAwIDAgMC0xOS42OTE1MiAyMC43MTU1MmwxNS43Mjg2NCAzNDAuNjU0MDhhMTEuMzY2NCAxMS4zNjY0IDAgMCAwIDExLjEzMDg4IDEwLjQ4NTc2eiBtLTI3Ljc1MDQgMTEzLjU2MTZhNTEuNjYwOCA1MS42NjA4IDAgMSAwIDEwMy4zMjE2IDAgNTEuNjYwOCA1MS42NjA4IDAgMCAwLTEwMy4zMjE2IDB6IiBmaWxsPSIjZjUyMjJkIiBwLWlkPSIzNTYzIj48L3BhdGg+PC9zdmc+"
           alt="">
      {{ option.msg }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DMessage',
  data () {
    return {
      option: {
        // 提示类型 success | error
        type: 'success',
        // 提示文字
        msg: '',
        // 收起时间
        duration: 3000
      },
      show: false,
      backTop: false
    }
  }
}
</script>

<style scoped lang="less">
.d-message {
  position: fixed;
  left: 50%;
  padding: 0 20px;
  transform: translateX(-50%);
  z-index: 22;
  white-space: nowrap;
  height: 48px;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 3px;
  box-sizing: border-box;

  &.backTop {
    top: 15px;
  }

  &.success {
    border-color: #52c41a;
    color: #52c41a;
    background: #F0F9EB;
  }

  &.error {
    border-color: #f5222d;
    color: #f5222d;
    background: #FEECEB;
  }

  > img {
    height: 20px;
    margin-right: 15px;
  }
}

.move-enter-active, .move-leave-active {
  top: 15px;
  transition: top .3s ease-in-out;
}

.move-enter, .move-leave-to /* .move-leave-active below version 2.1.8 */ {
  top: 0;
  opacity: 0;
}
</style>
