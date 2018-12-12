<template>
<div>
    <!-- <BreadCrumbs></BreadCrumbs> -->

    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
</div>
</template>
<script>
import BreadCrumbs from '@/components/BreadCrumbs'
export default {
  components: {
    BreadCrumbs
  }
}
</script>
<style>
@keyframes loading {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
.loading {
  position: relative;
}
.loading>div:nth-child(1) {
  width: 1.5px;
  height: 8px;
  background-color: #333;
  -webkit-animation: loading 1.2s 0.12s infinite ease-in-out;
  animation: loading 1.2s 0.12s infinite ease-in-out;
}
.loading>div:nth-child(2) {
  position: absolute;
      width: 1.5px;
  height: 8px;
    background-color: #333;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 2px;
    left: 6px;
    opacity: 1;
    -webkit-animation: loading 1.2s 0.24s infinite ease-in-out;
    animation: loading 1.2s 0.24s infinite ease-in-out;
}
.loading>div:nth-child(3) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  transform: rotate(90deg);
  top: 8px;
  left: 8px;
  -webkit-animation: loading 1.2s 0.36s infinite ease-in-out;
  animation: loading 1.2s 0.36s infinite ease-in-out;
}
.loading>div:nth-child(4) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  transform: rotate(135deg);
  left: 6px;
  top: 12.5px;
  -webkit-animation: loading 1.2s 0.48s infinite ease-in-out;
  animation: loading 1.2s 0.48s infinite ease-in-out;
}
.loading>div:nth-child(5) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  top: 14px;
  -webkit-animation: loading 1.2s 0.6s infinite ease-in-out;
  animation: loading 1.2s 0.6s infinite ease-in-out;
}
.loading>div:nth-child(6) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  transform: rotate(-135deg);
  top: 12.5px;
  left: -6px;
  -webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
  animation: loading 1.2s 0.72s infinite ease-in-out;
}
.loading>div:nth-child(7) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  transform: rotate(-90deg);
  top: 8px;
  left: -8px;
  -webkit-animation: loading 1.2s 0.84s infinite ease-in-out;
  animation: loading 1.2s 0.84s infinite ease-in-out;
}
.loading>div:nth-child(8) {
  position: absolute;
  width: 1.5px;
  height: 8px;
  background-color: #333;
  transform: rotate(-45deg);
  top: 2px;
  left: -6px;
  -webkit-animation: loading 1.2s 0.96s infinite ease-in-out;
  animation: loading 1.2s 0.96s infinite ease-in-out;
}
</style>
