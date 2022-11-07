<template>
  <div class = 'box2'>
      <apple ref = 'test2' />
      <button @click = 'show'>click显示ref</button>
      <h2 ref = 'test1'>总组件中的测试ref</h2>
  </div>
</template>

<script>
import apple from './components/apple.vue'

export default {
    
    components:{
        apple,
    },
    methods:{
        show(){
        console.log(this.$refs.test1);
        console.log(this.$refs.test2);
        }   
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