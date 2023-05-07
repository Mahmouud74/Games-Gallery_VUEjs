<!-- <script setup>
import { ref } from 'vue'


</script> -->
<script>
  import { ref } from 'vue'
  export default{
    name:"helloWorld",
    setup(){
      let nameTest="hello";
      return{nameTest};
    }
  }
</script>

<template>
  <p> {{ nameTest }}fasdf</p>
  </template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
