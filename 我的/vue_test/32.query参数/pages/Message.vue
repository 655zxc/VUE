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
      >message{{p.id}}</router-link>&nbsp;&nbsp;</li>
      <!-- 传参二 对象传参 -->



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
  }
};
</script>

<style>
</style>