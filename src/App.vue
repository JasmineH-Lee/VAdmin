<template>
  <div id="app">
    <div class="container">
      <header class="head-container">head</header>
      <div class="sidebar">sidebar</div>
      <div class="main-panel">
        <router-view></router-view>
      </div>
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
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
  padding: 10px 20px;
}
.sidebar {
  width: 140px;
  border: none;
  padding: 80px 20px 20px 20px;
  /* margin-top: 60px; */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(0deg,#7e8ea1,#3c4655);
}
.main-panel {
  padding: 20px;
  margin-left: 180px;
  margin-top: 60px;
}
</style>
