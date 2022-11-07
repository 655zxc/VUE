import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../pages/Details'
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
                children:[
                    {
                        path:'details',
                        component:Details
                    }
                ]
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