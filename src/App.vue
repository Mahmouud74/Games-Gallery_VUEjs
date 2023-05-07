<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
</script>

<template class="">
  <Header v-if="!$route.meta.hideHeader"></Header>
  <router-view ></router-view>
</template>

<style scoped>

</style>
