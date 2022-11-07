<template>
  <div class="box">
      <Item/>
 
      
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name:'List',
    components:{
        Item,
    }
}
</script>

<style scoped>
    .box{
        width: 450px;
        /* 设置成90% 传给子件了? */
    }
</style>