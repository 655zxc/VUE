<template>
  <div class = 'box2'>
      <apple/>
      <apples/>
  </div>
</template>

<script>
import apple from './components/apple.vue'
import apples from './components/apples.vue'

export default {
    
    components:{
        apple,apples
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