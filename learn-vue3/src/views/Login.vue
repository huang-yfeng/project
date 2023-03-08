<template>
 <h1>学习vue3数据驱动以及路由传参</h1>
  <br>
  <h2>{{num}}</h2>
  <button @click="addNum">num+10</button>
  <br>
  <h2>名称:{{formValue.name}}</h2>
  <button @click="addUser" >修改名称</button>
  <br>
  <button @click="getPath">跳转路由传参</button>
</template>

<script setup>
import {reactive,ref} from "vue"
import {useRouter} from "vue-router"
//reactive 传递的数据必须是对象，ref返回的是一个对象，获取数据需要.value

const router=useRouter()

const num=ref(100)
const formValue=reactive({
  name:"admin",
  age:"18",
})

const addNum=()=>{
  num.value+=10
}

const addUser=()=>{
  // console.log(formValue,'formValue')
  // Object.assign(formValue,{name:"黄亚枫"})
  formValue.name='黑炭'
  // console.log(formValue,'修改后的数据')
}

const getPath=()=>{
  // router.push('/register')
  let params={
    name:"admin"
  }
  //query传参
  router.push({
    path:'/register',
    query:params
  })

  //params传参
  // router.push({
  //   name:"register",
  //   params:params
  // })

}

</script>
