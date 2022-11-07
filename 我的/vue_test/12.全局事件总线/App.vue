<template>
  <div class = 'box2'>
      <apple/>
      <dog/>
  </div>
</template>

<script>
import apple from './components/apple.vue'
import dog from './components/dog.vue'

export default {
    
    components:{
        apple,dog 
    },
}
</script>

<style>
    .box2{
        width: 500px;
        margin: 0 auto;
        background-color: beige;
    }
</style>