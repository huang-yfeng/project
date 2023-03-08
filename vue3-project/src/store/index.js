import { createStore } from 'vuex'

export default createStore({
  state: {
    userinfo:{
      name:'黑炭',
      age:18
    }
  },
  getters: {
  },
  mutations: {
    add(){
      console.log('add1');
    }
  },
  actions: {
  },
  modules: {
  }
})
