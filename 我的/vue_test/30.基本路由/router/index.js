import About from '../components/About'
import Home from '../components/Home'
import VueRouter from 'vue-router'

const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
        },
    ]
})

export default router