import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router/index'

new Vue({
    el:'#app',
    render:h => h(App),
    router,
})