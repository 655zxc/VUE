<template>
  <div class = 'box'>
      <h2>color:{{color}}</h2>
      <h2>name:{{name}}</h2>

      <button @click = 'sendname'>点击获取name</button>
      <button @click = 'unbind'>点击解绑当前实例的事件appleself</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            color:'red',
            name:'apple',
        }
    },
    methods:{
        sendname(){//点击按钮触发函数
            this.$emit('appleself',this.name,1,2,3,4,5)
            //1.3 这个函数触发组件的appleself事件 并传参
            //2.4 这个函数触发组件的appleself事件 并传参
            
        },
        unbind(){
            this.$off('appleself')//给当前组件apple解绑事件appleself
        }
    }
}
</script>
















<style>
    .box{
        width: 500px;
    }
</style>