<template>
  <div class = 'box2'>
      <apple/>
  </div>
</template>

<script>
import apple from './components/apple.vue'

export default {
    
    components:{
        apple,
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