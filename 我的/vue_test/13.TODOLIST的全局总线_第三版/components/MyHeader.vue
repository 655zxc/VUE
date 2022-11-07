<template>
  <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter = 'addlist' />
      </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    
    name:'MyHeader',
    props:['receive'],//接受父亲传过来的函数
    methods:{
        addlist(e){
            if(e.target.value)//如果有内容 不为空
            {
                const item = {id : nanoid(),name:e.target.value,done:false}
                this.receive(item)
                e.target.value = ''
            }
        }//按下回车 添加list
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>