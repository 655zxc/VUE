<template>
  <div class="box">
      <input type="checkbox" name="test" > 
      <span>{{name}}</span>
      <div class="delete">删除</div>
  </div>
</template>

<script>
export default {
    name:'Item',
    data(){
        return {
            name:'打代码',
        }
    }
}
</script>

<style scoped>
    .box{
        width: 450px;
        border: 1px solid rgb(221, 221, 221);
        /* border-top:transparent; */
        height: 25px;
        font-size: 14px;
        line-height: 25px;
    }

    input{
        margin-left: 8px;
        margin-right: 6px;
    }

    .delete{
        width: 40px;
        height: 21px;
        color: white;
        background-color: red;
        border-radius: 2px;
        float: right;
        margin-top: 2px;
        margin-right: 8px;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        display: none;
    }
    .box:hover{
        background-color: rgb(221, 221, 221);
    }

    .box:hover .delete{
        display: block;
    }
</style>