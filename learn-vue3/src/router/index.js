import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=>import("@/views/Login.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import("@/views/register.vue")
  },
  {
    path: '/home',
    name:"home",
    component:()=>import("@/views/Home.vue")
  },
  {
    path: '/vuex',
    name:'vuex',
    component:()=>import("@/views/vuexConnect.vue")
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  // console.log(to,'to',from,'from',next,'next')
  // return false
  next();
})

export default router
