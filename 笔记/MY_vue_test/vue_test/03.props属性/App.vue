<template>
	<div>
		<!-- age="18" 传的是字符串 无论引号里面写什么都是字符串
		:age="18" 传的是一个表达式18 是数字 -->
		<Student name="李四" sex="女" :age="18"/>
		<!-- 在app组件中使用student组件 并且声明数值 -->
		<!-- name sex age 这里相当于函数的参数 -->
		<!-- 需要在student里的props接受参数 -->
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
