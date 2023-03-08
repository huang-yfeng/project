<template>
  <button @click="addUser">login1子组件</button>
  <h1>{{ num }}</h1>
</template>

<script setup>
const props = defineProps({ num:Number });
const emit=defineEmits(['addlogin1'])
const addUser=()=>{
  
}
</script>

<style>
</style>