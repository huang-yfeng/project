<template>
  <div>
    注册
  </div>
  <h2>query参数:{{userParams.query.name}}</h2>
</template>

<script setup>
import {onMounted} from "vue"
import {useRoute} from "vue-router"

const userParams=useRoute()

onMounted(()=>{

})

</script>