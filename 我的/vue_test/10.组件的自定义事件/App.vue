<template>
  <div class = 'box2'>
      <!-- 方法一二都要在app里写函数 组件里调用$emit
      区别在于给事件绑定函数的步骤不同 -->
      <!-- 第二种更灵活 -->
      当前对象是{{name}}
      
      <h2>第一种方法</h2>
      <apple v-on:appleself = 'getname'/>
      <!-- 1.1 给组件绑定事件 触发时间时调用函数 getname -->

      <h2>第二种方法</h2>
      <apple ref = 'flag'/>
      <!-- 2.1 给组件设置ref名字 -->
  </div>
</template>

<script>
import apple from './components/apple.vue'

export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        getname(name,...others){
            console.log(name,others);
            // 1.2 写触发事件会调用的函数 这里的参数是 组件中this.$emit传的参数
            // 2.3 写触发事件会调用的函数 这里的参数是 组件中this.$emit传的参数
            this.name = name;
        }
    },
    components:{
        apple,
    },
    mounted(){
        this.$refs.flag.$on('appleself',this.getname)
        // 2.3 给ref是flag的组件绑定一个事件 触发事件的时候调用函数
    }
}
 
</script>

















<style>
    .box2{
        width: 500px;
        margin: 0 auto;
        background-color: beige;
    }
</style>