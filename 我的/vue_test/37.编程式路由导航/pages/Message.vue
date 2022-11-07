<template>
  <div>
    <ul>
      <!-- <li v-for = 'p in messagelist' :key = p.id><router-link :to="`/home/message/details?id=${p.id}&content=${p.content}`" >message{{p.id}}</router-link>&nbsp;&nbsp;</li> -->
      <!-- 传参一 注bind绑定to to后面是一个js表达式 这个表达式是模板字符串 -->
      <li v-for = 'p in messagelist' :key = p.id><router-link 
      :to="{
        path:'/home/message/details',
        query:{
          id:p.id,
          content:p.content
        }
        }" 
      >message{{p.id}}</router-link>
      <button @click = "push(p)">push访问此处</button>
      <button @click = "replace(p)">replace访问此处</button>
      <!-- 传参数m -->
      &nbsp;&nbsp;</li>
      



    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      messagelist:[
        {id:'001',content:'消息ASXXT'},
        {id:'002',content:'消息INNZS'},
        {id:'003',content:'消息MHXOS'},
      ]
    }
  },
  methods:{
    push(p){
      this.$router.push({
        path:'/home/message/details',
        query:{
          id:p.id,
          content:p.content,
        }
      })
      //push方法里的内容 就是router-link中to后面括号的内容
    },
    replace(p){
      this.$router.replace({
        //调用总路由管理$router
        path:'/home/message/details',
        query:{
          id:p.id,
          content:p.content
        }
      })
    }
  }
};
</script>

<style>
</style>