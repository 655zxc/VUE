import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false

// Vue.use(ElementUI);


import { Button ,Row} from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
new Vue({
    el:'#app',
    render:h => h(App),
})