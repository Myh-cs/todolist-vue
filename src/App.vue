<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">TodoList</router-link>|
      <router-link to="/create">AddTodo</router-link>
    </div>
    <div class="list-container">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.list-container {
  width: 33%;
  margin: 0 auto;
}
</style>
