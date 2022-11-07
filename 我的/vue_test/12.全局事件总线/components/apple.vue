<template>
  <div class = 'box'>
      <h2>color:{{color}}</h2>
      <h2>name:{{name}}</h2>
      <button @click = 'eat'>click to eat</button>
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
        eat(){
            this.$bus.$emit('eat',this.name)//触发eat事件 并且传递参数
        }
    }
}
</script>

<style scoped>
    .box{
        width: 500px;
    }
</style>