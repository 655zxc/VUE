import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    // add(store,n){
    //     store.commit('ADD',n)
    // },
    // sub(store,n){
    //     store.commit('SUB',n)
    // },
    //不需要actions处理 直接调用mutations
    addodd(store,n){
        if(store.state.sum%2 != 0){
            store.commit('ADD',n) //直接调用add函数 不用写ADDODD了
        }
    },
    addtime(store,n){
        setTimeout(()=>{
            store.commit('ADD',n) //同上
        },1000)
    },

}

const mutations = {
    ADD(state,n){
        state.sum += n
    },
    SUB(state,n){
        state.sum -= n
    },
}

const state = {
    sum:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})