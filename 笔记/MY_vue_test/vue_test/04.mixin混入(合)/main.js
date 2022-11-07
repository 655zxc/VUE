//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)
//全局配置
//在main中写 所有的vm vc都会引入


//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})