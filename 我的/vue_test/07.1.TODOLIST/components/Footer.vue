<template>
  <div class="box">
      <input type="checkbox" name="test" > 
      <span>已完成{{already}}/全部{{all}}</span>
  </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return {
            already:0,
            all:3,
        }
    }
}
</script>

<style scoped>
    .box{
        width: 90%;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
    }

    input{
        margin-left: 8px;
        margin-right: 36px;
    }
</style >