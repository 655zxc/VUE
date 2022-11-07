<template>
  <div class="box">
      <h3>--------------------------</h3>
      <h3>apple列表</h3>
      <h3>拿到上方组件sum,值为{{sum}}</h3>
      <button @click = 'addperson'>click to add person</button>
      <ul>
          <li v-for = '(item,index) in $store.state.persons' :key = 'index'>
              {{item}}
          </li>
      </ul>
      
  </div>
 
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
    name:'Apples',
    data(){
        return {
            name:0
        }
    },
    methods:{
        addperson(){
            this.name++
            const newperson = {id:nanoid(),name:this.name}
            this.$store.commit('ADDPERSON',newperson)
        }
    },
    computed:{
        ...mapState(['sum'])
    }
}
</script>


<style>
    .box{
        width: 500px;
    }
</style>