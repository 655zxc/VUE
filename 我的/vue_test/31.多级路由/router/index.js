import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
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


            children:[
            {
                path:'message',
                component:Message,
            },

            {
                path:'news',
                component:News,
            },
            ]
            //子路pages


        },
        
    ]
})

export default router