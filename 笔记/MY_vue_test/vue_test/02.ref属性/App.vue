<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},

			// 想要获取h1标签 在原生js很容易
			// 但是在vue里面要使用ref标识标签
			// 然后再通过$refs获取







		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
				//注意vc的属性是$refs
				//标签是ref

				// this是app
				// 它的内容是上面的template
				// 内容存放在vc(this)的$refs属性中
			}
		},
	}
</script>
