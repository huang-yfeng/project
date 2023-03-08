<template>
<div style="color: blue">子传父</div>
  <br>
  <h1>{{num1}}</h1>
  <button @click="clcikNum">+100</button>
</template>

<script setup>
import {ref} from "vue";

const emit=defineEmits(['clcikNum'])
const num1=ref(100)
const clcikNum=()=>{
  num1.value+=10
  emit('clcikNum',num1.value)
}

</script>

<style scoped>

</style>