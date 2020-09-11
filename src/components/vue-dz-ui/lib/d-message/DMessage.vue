<template>
  <transition name="move">
    <div class="d-message" :class="[option.type, backTop ? 'backTop': '']" v-if="show">
      <img :src="base64Img[option.type]" alt="提示图片">
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
        // 提示类型 success | warning | error
        type: 'success',
        // 提示文字
        msg: '',
        // 收起时间
        duration: 3000
      },
      show: false,
      backTop: false,
      // 提示类型，对应base64
      base64Img: {
        success: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkwNTYyODEzNjQwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNTEyYzAgMjgyLjc5NDY2NyAyMjkuMjA1MzMzIDUxMiA1MTIgNTEyczUxMi0yMjkuMjA1MzMzIDUxMi01MTJTNzk0Ljc5NDY2NyAwIDUxMiAwIDAgMjI5LjIwNTMzMyAwIDUxMnogbTc2My4xNzg2NjctMTQ2Ljc3MzMzM2EzMiAzMiAwIDAgMSAwIDQ1LjI2OTMzM2wtMjk0LjE0NCAyOTQuMTg2NjY3YTMxLjkxNDY2NyAzMS45MTQ2NjcgMCAwIDEtMjIuMTQ0IDkuMzg2NjY2IDMxLjg3MiAzMS44NzIgMCAwIDEtMzIuNTEyLTcuODA4TDI3OC42MTMzMzMgNTcwLjQ5NmEzMiAzMiAwIDAgMSAwLTQ1LjIyNjY2N2wyMi42MTMzMzQtMjIuNjEzMzMzYTMyIDMyIDAgMCAxIDQ1LjI2OTMzMyAwbDk0LjQyMTMzMyA5NC4yOTMzMzMgMjU0LjM3ODY2Ny0yNTQuMjkzMzMzYTMyIDMyIDAgMCAxIDQ1LjIyNjY2NyAwbDIyLjYxMzMzMyAyMi42MTMzMzN6IiBmaWxsPSIjNTJjNDFhIiBwLWlkPSIyNzA0Ij48L3BhdGg+PC9zdmc+',
        warning: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5Nzg1ODkxNDM0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM5ODEiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmk1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCA1MjhDNTYwIDU1NC40OTYgNTM4LjYyNCA1NzYgNTEyIDU3NmwwIDBDNDg1LjU2OCA1NzYgNDY0IDU1NC40OTYgNDY0IDUyOGwwLTIyNEM0NjQgMjc3LjQ0IDQ4NS41NjggMjU2IDUxMiAyNTZsMCAwYzI2LjYyNCAwIDQ4IDIxLjQ0IDQ4IDQ4TDU2MCA1Mjh6TTU2MCA3MjBjMC0yNi40OTYtMjEuMzc2LTQ4LTQ4LTQ4LTI2LjQzMiAwLTQ4IDIxLjUwNC00OCA0OFM0ODUuNTY4IDc2OCA1MTIgNzY4QzUzOC42MjQgNzY4IDU2MCA3NDYuNDk2IDU2MCA3MjB6TTUxMiA2NEMyNjQuNjQgNjQgNjQgMjY0LjY0IDY0IDUxMmMwIDI0Ny40MjQgMjAwLjY0IDQ0OCA0NDggNDQ4IDI0Ny40ODggMCA0NDgtMjAwLjU3NiA0NDgtNDQ4Qzk2MCAyNjQuNjQgNzU5LjQ4OCA2NCA1MTIgNjR6TTUxMiA4OTYuNzY4Yy0yMTIuNDggMC0zODQuNzY4LTE3Mi4yMjQtMzg0Ljc2OC0zODQuNzY4UzI5OS41MiAxMjcuMjMyIDUxMiAxMjcuMjMyIDg5Ni42NCAyOTkuNTIgODk2LjY0IDUxMiA3MjQuNDggODk2Ljc2OCA1MTIgODk2Ljc2OHoiIHAtaWQ9IjM5ODIiIGZpbGw9IiNlYTk1MTgiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmk2Ij48L3BhdGg+PC9zdmc+',
        error: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5Nzg1MTc5ODk3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1OTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTExLjUxNzUxMSA5NTguNzg1NzE5Yy0yNDcuMTU5MTQ2IDAtNDQ3LjUyNTU3LTIwMC4zNjY0MjQtNDQ3LjUyNTU3LTQ0Ny41MjU1NyAwLTI0Ny4xNTgxMjMgMjAwLjM2NjQyNC00NDcuNTI1NTcgNDQ3LjUyNTU3LTQ0Ny41MjU1NyAyNDcuMTU3MDk5IDAgNDQ3LjUyNTU3IDIwMC4zNjc0NDcgNDQ3LjUyNTU3IDQ0Ny41MjU1N0M5NTkuMDQzMDgxIDc1OC40MjAzMTkgNzU4LjY3NDYxMSA5NTguNzg1NzE5IDUxMS41MTc1MTEgOTU4Ljc4NTcxOXpNNjg1LjM2NTk3OCA0MDAuODc3MTMzbC02My4zNTkwMjctNjMuMDYyMjY4LTExMC4xODg1ODggMTA5LjY5ODQyNEwzOTguMDk2Mjk5IDMzMy44OTk2OTZsLTY0LjM0MDM3NyA2NC4zMTE3MjUgMTEzLjYxMzU5NCAxMTMuNTA1MTI0TDMzNi45MTE3OTggNjIxLjY1ODUxNmw2My4zNjAwNSA2My4wMzQ2MzkgMTEwLjMyMjY0MS0xMDkuODA1ODcyIDExMi43OTgwMTkgMTEyLjcxNjE1NCA2NC4zMzgzMzEtNjQuMzEyNzQ4TDU3NS4wNzA5NjYgNTEwLjcxMDYzNCA2ODUuMzY1OTc4IDQwMC44NzcxMzN6IiBwLWlkPSIyNTk5IiBmaWxsPSIjZDgxZTA2Ij48L3BhdGg+PC9zdmc+'
      }
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
    background: #f0f9eb;
  }

  &.warning {
    border-color: #FAAD14;
    color: #FAAD14;
    background: #f9f1eb;
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
