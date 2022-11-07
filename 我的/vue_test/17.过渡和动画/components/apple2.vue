<template>
  <div class = 'box'>
      <button @click = 'isshow = !isshow'>click</button>
      <transition name = 'no1' appear>
      <h1 v-show = 'isshow'>动画一</h1>
      </transition>
      <!-- <h1 v-show = 'isshow' class = 'come'>动画一</h1> -->

      <!-- 这个isshow在改变的时候触发了动画 -->
      <!-- 变成false触发.v-leave-active -->
      <!-- 变成true触发.v-enter-active -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            isshow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: brown;
        
    }

    .no1-enter-active{
        animation: test 0.4s
    }

    .no1-leave-active{
        animation: test 0.4s reverse
    }

    /* .to{
        animation: test 2s
    }

    .come{
        animation: test 2s reverse
    } */

   @keyframes test {
       from{
           transform: translateX(-100%);
       }

       to{
           transform: translateX(0);
       }
   }
</style>