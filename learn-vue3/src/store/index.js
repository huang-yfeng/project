import {createStore} from 'vuex'

export default createStore({
    state: {
        num: 100,
    },
    getters: {},
    mutations: {
        addNum(state, action) {
            return state.num += action
        }
    },
    actions: {},
    modules: {}
})
