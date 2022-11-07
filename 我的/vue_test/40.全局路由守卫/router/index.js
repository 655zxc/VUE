import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Details from '../pages/Details'
import VueRouter from 'vue-router'

const myrouter = new VueRouter({
    routes:[
        {
            name:'aboutroute',
            path:'/about',
            component:About,
        },
        {
            name:'homeroute',
            path:'/home',
            component:Home,


            children:[
            {
                name:'messageroute',
                path:'message',
                component:Message,
                children:[
                    {
                        name:'detailsroute',
                        path:'details',
                        component:Details
                    }
                ]
            },

            {
                name:'newsroute',
                path:'news',
                component:News,
            },
            ]
        }, 
    ]
})

//实现:当localStorage缓存中的friut是apple 允许访问message和news 否则不可以
//在首次加载 每次切换之前执行箭头函数的代码
//三个参数是 去 来 执行
myrouter.beforeEach((to,from,next)=>{
    if((to.path == '/home/message' || to.path == '/home/news') && localStorage.getItem('friut')!='apple'){
        //也可以用to.name
        //如果访问message和news 且缓存不对 不放行
        console.log("friut错误")
    }
    else{
        console.log("正常访问");
        next()
    }
})
export default myrouter