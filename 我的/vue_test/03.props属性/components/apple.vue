<template>
  <div class = 'box'>
      <h2>color:{{color}}</h2>
      <h2>name:{{name}}</h2>
      <h2>cost:{{cost}}</h2>
      <h2>tencost:{{tencost}}</h2>
      <h2>taste:{{taste}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return {
            color:'red',
            name:'apple',
            tencost:this.cost*10,
        }
    },
    props:['cost','taste'],
}
</script>

<style>
    .box{
        width: 500px;
    }
</style>