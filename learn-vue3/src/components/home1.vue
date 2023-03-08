<template>
  <div style="color: blue">父传子</div>
  <br>
  <h2>{{num}}</h2>
</template>

<script setup>
import {} from "vue"

const props=defineProps({
  num:Number
})

</script>

<style scoped>

</style>