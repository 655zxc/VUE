<template>
  <div class="todo-footer" v-show = 'items.length'>
    <!-- v-show = 'items.length' 没有内容时不展示 -->
        <label>
          <input  type="checkbox" @click = 'change' :checked = 'isall'/>
        </label>
        <span>
          <span>已完成 {{itemalready}}</span> / 全部 {{items.length}}
        </span>
        <button class="btn btn-danger" @click = 'removeall'>清除已完成任务</button>
      </div>
</template>

<script>
export default {
        name:'MyFooter',
        props:['changeallcheck','items','removedone'],
        methods:{
          change(e){
            this.changeallcheck(e.target.checked)
            //checked别写成value了
          },
          removeall(){
            this.removedone()
          }
          
        },
        computed:{
          itemalready(){
            let sum = 0
            this.items.forEach(p=>{
              if(p.done == true){
                sum++
              }
            })
            return sum
          },
          isall(){
            if(this.itemalready == this.items.length && this.items.length>0){
              return true
            }else{
              return false
            }
          },
        },
        
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>