<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Button</router-link> |
      <router-link to="/inputTest">Input</router-link> |
      <router-link to="/inputNumberTest">InputNumber</router-link> |
      <router-link to="/checkboxTest">Checkbox</router-link> |
      <router-link to="/radioTest">Radio</router-link> |
      <router-link to="/selectTest">Select</router-link> |
      <router-link to="/messageTest">Message</router-link> |
      <router-link to="/confirmTest">Confirm</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
