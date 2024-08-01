<template>
  <header-comp></header-comp>
  <div class="content">
    <sider-bar></sider-bar>
    <main>
        <RouterView></RouterView>
    </main>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import SiderBar from "./components/SiderBar.vue"
</script>
<style scoped>
.content {
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
}

main {
  width: calc(100vw - 260px);
  overflow: hidden;
}
</style>
