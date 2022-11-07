<template>
  <div class = 'box'>
      <h3>总个数{{$store.state.sum}}</h3>
      <select v-model = n>
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click = 'add'>click to +</button>
      <button @click = 'sub'>click to -</button>
      <button @click = 'addodd'>+ if is odd</button>
      <button @click = 'addtime'>+ after time</button>
  </div>
</template> 

<script>
export default {
    data(){
        return {
            n:1
        }
    },
    methods:{
        add(){
            // this.$store.dispatch('add',this.n)
            this.$store.commit('ADD',this.n)
            //直接调用
        },
        sub(){
            // this.$store.dispatch('sub',this.n)
            this.$store.commit('SUB',this.n)
        },
        addodd(){
            this.$store.dispatch('addodd',this.n)
        },
        addtime(){
            this.$store.dispatch('addtime',this.n)
        },
    }
  
}
</script>

<style>
    .box{
        width: 500px;
    }
</style>