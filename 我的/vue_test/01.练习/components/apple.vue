<template>
  <div class = 'box'>
      <h2>color:{{color}}</h2>
      <h2>name:{{name}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return {
            color:'red',
            name:'apple',
        }
    }
}
</script>

<style>
    .box{
        width: 500px;
    }
</style>