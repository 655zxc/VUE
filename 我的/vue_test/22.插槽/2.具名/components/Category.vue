<template>
	<div class="category">
		<h3>{{name}}</h3>
		
		<slot name = 'top'>top</slot>
		<slot name = 'bottom'>bottom</slot>
	</div>
</template>

<script>
	export default {
		name:'Category',
		props:['name']
	}
</script>

<style scoped>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>