<template>
  <div id="app">
    <div class="container">
      <header class="head-container">head</header>
      <div>sidebar</div>
      <div>page</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  display: block;
  margin: 0;
  padding: 0;
  background: #eee;
}
.container {

}
.head-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
}
</style>
