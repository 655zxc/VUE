<template>
    <ul class="todo-main">
        <Item v-for = 'item in items' :key = 'item.id' :item = 'item' />
        <!-- 使用props传入每个Item在Items的信息 因为要使用表达式 因此使用单向绑定 -->

        <!-- 直接传对象也可以 把item传过去 -->
    </ul>
</template>

<script>
import Item from './MyItem.vue'
export default {
    name:'MyList',
    props:['items'],
    // props接收的值会出现在vc上 因此可以直接使用
    methods:{

    },
    components:{
        Item,
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>