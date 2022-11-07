<template>
  <div class = 'box'>
      <h2>kind:{{kind}}</h2>
      <h2>voice:{{voice}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    data(){
        return {
            kind:'dog',
            voice:'woof',
        }
    },
    methods:{
        ieat(msg,name){
            console.log(this.kind + ' eat ' + name);
        }
    },
    mounted(){
        // this.$bus.$on('eat',this.ieat)//给bus绑定eat事件 回调函数ieat
        pubsub.subscribe('eat',this.ieat)
    }
}
</script>

<style scoped>
    .box{
        width: 500px;
    }
</style>