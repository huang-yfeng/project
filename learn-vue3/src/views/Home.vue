<template>
<h1>学习vue3组件通讯</h1>
  <br>

  <h2>接收子组件的num: {{cliclNum1}}</h2>


  <div class="center">
    <div class="box1">
      <h1>子组件1</h1>
      <HomeOne :num="num"/>
      <button @click="addNum">+10</button>
    </div>

    <div class="box2">
      <h1>子组件2</h1>
      <HomeTwo @clcikNum="clcik"/>
    </div>
  </div>





</template>

<script setup>
import {onMounted,ref} from "vue"
import HomeOne from "@/components/home1.vue"
import HomeTwo from "@/components/home2.vue"

const num=ref(100)
const cliclNum1=ref(0)

const addNum=()=>{
  num.value+=10
}

const clcik=(val)=>{
  cliclNum1.value=val
}


</script>

<style scoped>
.center{
  display: flex;
}
.box1{
  width: 300px;
  height: 300px;
  background: red;
}
.box2{
  width: 300px;
  height: 300px;
  background: yellow;
}
</style>

