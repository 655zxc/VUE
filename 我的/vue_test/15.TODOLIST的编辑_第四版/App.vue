<template>

     
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :receive = 'receive'/>
      <!-- 传递了一个函数的地址  让子组件可以使用父亲的函数-->
      <MyList :items='items' />
      <MyFooter :items='items' :changeallcheck = 'changeallcheck' :removedone = 'removedone'/>
    </div>
  </div>
</div>


 
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
    name:'App',
     data(){
        return {
            // items:[
            //     {id:'001',name:'打代码',done:true},
            //     {id:'002',name:'吃饭',done:false},
            //     {id:'003',name:'睡觉',done:false},
                
            // ]
            items:  JSON.parse(localStorage.getItem('items')) || []
            //当存储返回null时 items等于[]
        }
    },//兄弟组件的共用数据被放到了父亲上
    mounted(){
      this.$bus.$on('change',this.changecheck)
      this.$bus.$on('removeitem',this.removeitem)

      this.$bus.$on('inputchange',this.inputchange)//绑定事件
    },
    beforeDestroy() {
      this.$bus.$off('change')
      this.$bus.$off('removeitem')
    },
    methods:{
      receive(item){//这个方法是给儿子用的
        this.items.unshift(item)
        //添加对象 
      },
      changecheck(id,flag){
        this.items.some(function(p){//使用some遍历数组
          if(p.id == id)
          {
            p.done = flag
            return true
          }
        })
      },
      changeallcheck(flag){
        this.items.forEach(function(p){
          p.done = flag
        })
      },
      removeitem(id){
        var m = 0
        this.items.some(p=>{
          if(p.id == id)
          {
            this.items.splice(m,1)
            //不要用普通函数!!!!否则this就变成了数组元素 就不是vc了
            return true
          }
          else{
            m++
          }
        })
      },
      removedone(){
        // let flag = 0
        // this.items.forEach(p=>{
        //   if(p.done == true){
        //     this.items.splice(flag,1)
        //   }
          
        //   flag++
        // })
        //foreach有bug ? 是改变原数组顺序出错了?



        if(confirm('删除已选事件?')){
          let arr = this.items.filter(p=>{
          return p.done != true
        })

        this.items = arr
        }
      },
      inputchange(id,value){
        this.items.some(p=>{
          if(p.id == id){
            p.name = value
            return true
          }

        })
      }
      
    },
    components:{
        MyHeader,
        MyList,
        MyFooter,
    },

    watch:{
      items:{
        deep:true,  
        handler(newvalue){
          localStorage.setItem('items',JSON.stringify(newvalue))
        }
      }
      //深度监视items 当items改变(增删 勾选) 设置newvalue为缓存
      //(newvalue就是新的items 存一份就可以 注意items是对象转字符串)
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-edit{
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
  margin-right: 5px;
}

.btn-edit:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>