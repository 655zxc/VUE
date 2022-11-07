<template>
        <li>
          <label>
            <!-- <input type="checkbox"  v-model = 'item.done' /> -->
            <input type="checkbox"  :checked = 'item.done' @click = 'change'/>
            <span v-show = '!item.isedit'>{{item.name}}</span>
            <!-- 按钮 -->
            <input type="text" v-show = 'item.isedit' @blur = 'inputblur' ref = 'myinput'>
            <!-- 编辑时的文本框 -->
            <!-- 添加v-show 根据是否在编辑显示 -->
          </label>
          
          <button class="btn btn-danger" @click = 'deleteitem'>删除</button>

          <button class="btn btn-edit" @click = 'edit'>编辑</button>
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
        },

        edit(){//点击按钮 触发编辑函数 将isedit设置为true
        if(!('isedit' in this.item)){//没有isedit
          this.$set(this.item,'isedit',true)//添加isedit属性 并设置为true
          //  console.log('添加edit了');
        }
        else{//有isedit 直接设置为true
          this.item.isedit = true
          // console.log('已经有edit了');
        }
          // this.$refs.myinput.focus()
          //不可以 为什么?
          //因为47行走完后执行48行
          //模板并没有立刻被解析 执行48行的时候编辑框还没有出现
          this.$nextTick(()=>{
            this.$refs.myinput.focus()
          })
        },

        inputblur(e){//文本框失焦 取消编辑 并且修改内容(触发自定义事件)
          this.item.isedit = false
          if(e.target.value == '')
          return//输入为空时 不修改
          this.$bus.$emit('inputchange',this.item.id,e.target.value)//全局总线 传输修改内容 item的id
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