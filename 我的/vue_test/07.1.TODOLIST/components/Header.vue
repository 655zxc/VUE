<template>
  <div class = 'todo-header'>
      <input type="text">
  </div>
</template>

<script>
export default {
    name:'Header',
}
</script>

<style scoped>
    input{
        outline: none;
        width: 100%;
        border: 1px solid rgb(204, 204, 204);
        height: 25px;
        border-radius: 5px;
    }

    .todo-header{
        width: 90%;
    }

    input:focus{
        border: 1px solid skyblue;
        box-shadow: 0 0 5px skyblue;
    }

    
</style>