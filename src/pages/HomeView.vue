<template>
  <canvas ref="mycanvas"></canvas>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const mycanvas = ref();

function initWebgl() {
  const canvas = mycanvas.value;
  const gl = canvas.getContext('webgl');
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;

  
}

onMounted(() => {
  initWebgl();
});
</script>
<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>