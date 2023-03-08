<template>
  <div>登录页面{{ num }}</div>
  <button @click="add">添加10</button>
  <LoginOne :num="numOne" />
  <LoginTwo />
</template>
<!-- <script setup> vue3语法糖 -->

<script setup>
import LoginOne from "@/components/login1.vue";
import LoginTwo from "@/components/login2.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const num = ref(100);
const numOne = ref(200);
const store = useStore();

const add = () => {
  num.value += 10;
  // console.log(store.state.userinfo);
};

onMounted(() => {
  //   alert("页面加载完成");
  store.commit('add') //调用vuex中mutations的方法
});
</script>

<style scoped>

</style>