<template>
  <h1>学习vue3中的vuex使用</h1>
  <br>

  <h2>获取vuex中的数据{{store.state.num}}</h2>
  <button @click="add">+10</button>

</template>

<script setup>
import {ref,reactive,onMounted} from "vue"
import {useStore,mapState} from "vuex"

const store=useStore()
const {...state}=mapState(['num'])

const add=()=>{
  const params=10;
  store.commit('addNum',params)//调用mutations中的方法
}

onMounted(()=>{
  console.log(store.state.num,'')//获取数据
})



</script>

<style scoped>

</style>