<template>
  <h1>
    {{num}}
  </h1>
  <Button @click="add">添加</Button>
</template>

<script setup>
import {ref} from "vue";
import {Button} from "ant-design-vue"

const num=ref(100)

const add=()=>{
  num.value+=1
}


</script>

<style>

</style>
