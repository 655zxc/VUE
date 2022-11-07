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
                meta:{isauth:true},
                //给message的路由的属性meta添加信息
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
                meta:{isauth:true},
                //给message的路由的属性meta添加信息
                name:'newsroute',
                path:'news',
                component:News,
            },
            ]
        }, 
    ]
})

//前置
myrouter.beforeEach((to,from,next)=>{
    //to from 有属性meta 用来专门存放一些校验数据
    // console.log(to);
    // console.log(from);
    // console.log(next);
    // if((to.path == '/home/message' || to.path == '/home/news') && localStorage.getItem('friut')!='apple'){
    if((to.meta.isauth == true) && localStorage.getItem('friut')!='apple'){
        //访问来的路由中是否有meta且为true 如果是 则代表这个路由需要鉴定权限
        //这样写就比较方便
        
        console.log("前置路由守卫:friut错误")
    }
    else{
        console.log("前置路由守卫:正常访问",to.name);
        next()
    }
})

myrouter.afterEach((to,from)=>{
    console.log('后置路由守卫:路由调用完成',to.name);
    from
})
//后置 没有next 首次加载和切换完执行
export default myrouter