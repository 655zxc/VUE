<template>
        <li>
          <label>
            <!-- <input type="checkbox"  v-model = 'item.done' /> -->
            <input type="checkbox"  :checked = 'item.done' @click = 'change'/>
            <span>{{item.name}}</span>
          </label>
          <button class="btn btn-danger" @click = 'deleteitem'>删除</button>
        </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['item'],
    //一个对象对应一个item
    // 每个item都会有一个对象传过来的值
    methods:{

        change(e){       
          this.$bus.$emit('change',this.item.id,e.target.checked)

        },

        deleteitem(){
          if(confirm('确认删除吗?')){
            this.$bus.$emit('removeitem',this.item.id)
           
          }
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: rgb(221, 221, 221);
}
li:hover button{
  display: block;
}
</style>