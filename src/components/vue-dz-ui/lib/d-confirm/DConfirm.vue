<template>
  <transition name="fade">
    <div class="d-confirm" v-if="show">
      <div class="d-confirm-wrap">
        <div class="d-confirm-title" :class="{'has-title': option.title}">
          <div class="title">{{ option.title }}</div>
          <img
            @click="close"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC44MjkiIGhlaWdodD0iMTQuODI4IiB2aWV3Qm94PSIwIDAgMTQuODI5IDE0LjgyOCI+DQogIDxnIGlkPSLnu4RfNTIwNCIgZGF0YS1uYW1lPSLnu4QgNTIwNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40MTQgMS40MTQpIj4NCiAgICA8cGF0aCBpZD0i6Lev5b6EXzEwNSIgZGF0YS1uYW1lPSLot6/lvoQgMTA1IiBkPSJNMTU5Mi43NTEsNzA1Mi4wMjNsLTEyLDEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU4MC43NTEgLTcwNTIuMDIzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODg4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KICAgIDxwYXRoIGlkPSLot6/lvoRfMTA2IiBkYXRhLW5hbWU9Iui3r+W+hCAxMDYiIGQ9Ik0xMiwwLDAsMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTIpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+DQogIDwvZz4NCjwvc3ZnPg0K"
            alt="">
        </div>
        <div class="d-confirm-box">
          <div class="desc" v-html="option.desc"/>
          <div class="btn-box" :class="{center: option.title}">
            <div class="btn" @click="close">{{ option.btnText[0] }}</div>
            <div class="btn primary" @click="ok">{{ option.btnText[1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DConfirm',
  data () {
    return {
      option: {
        title: '',
        desc: '',
        btnText: ['CLOSE', 'OK']
      },
      show: false
    }
  },
  methods: {
    ok () {
      console.log('ok')
    },
    close () {
      console.log('close')
    }
  }
}
</script>

<style scoped lang="less">
@import "../style/theme-color";

.center {
  justify-content: center !important;
}

.d-confirm {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background: rgba(0, 0, 0, .5);

  .d-confirm-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 360px;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 4px;
    overflow: hidden;

    .d-confirm-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      font-size: 20px;

      > img {
        height: 18px;
        cursor: pointer;
      }

      &.has-title {
        margin-bottom: 25px;
        background: #f8f8f8;
      }
    }

    .d-confirm-box {
      .desc {
        height: 85px;
        line-height: 19px;
        font-size: 14px;
      }

      .btn-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .btn {
          width: 70px;
          text-align: center;
          line-height: 32px;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          color: #888;
          box-sizing: border-box;
          border-radius: 3px;
          cursor: pointer;

          &:last-child {
            margin-left: 20px;
          }

          &.primary {
            background: #ee7800;
            color: #fff;
          }
        }
      }
    }

    .d-confirm-box {
      padding: 0 20px 20px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
