<template>
  <div class = 'appbox'>
      <Header/>
      <List/>
      <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
    
    components:{
        Header,
        List,
        Footer,
    },
}
</script>

<style>
    
    *{
        margin: 0;
   
        padding: 0;
    }

    .appbox{
        width: 500px;
        margin: 0 auto;
        margin-top: 100px;
        /* background-color: darkorange; */
        border: 1px solid rgb(221, 221, 221);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        height: 200px;
        justify-content: space-around;
        align-items: center;
        /* align-items 和 align-content的值是不同的 */
    }
</style>