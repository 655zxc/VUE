<template>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>    
        <button @click = 'back'>ει</button>
        <button @click = 'forward'>εθΏ</button>
      </div>
    </div>
</template>

<script>
export default {
    name:'Top',
    methods:{
        back(){
				this.$router.back()
				// console.log(this.$router)
		},
		forward(){
				this.$router.forward()
		},
    }
}
</script>

<style scoped>
 
</style>