<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model = 'keywords'
      />&nbsp;<button @click = 'search'>Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  // https://api.github.com/search/users?q=xxx
  data(){
    return{
      keywords:''
    }
  },
  methods:{
    search(){
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
        response =>{
          this.$bus.$emit('search',response.data.items)
        },
        error =>{
          console.log('访问失败',error);
        }
      )

    


    },
  }
};
</script>

<style>
</style>

