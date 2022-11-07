<template>
	<div>
		<button @click="getStudents">获取学生信息(方法一)</button>
		<button @click="getCars">获取汽车信息(跨域 访问失败)</button>
		<button @click="getStudents2">获取学生信息(方法二)</button>
		<button @click="getCars2">获取汽车信息(方法二)</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		// 8080(本页面的端口)端口访问5000 5001(服务器的端口) 跨域了
		name:'App',
		methods: {
			getStudents(){
				// axios.get('http://localhost:5000/students').then(
					axios.get('http://localhost:8080/students').then(
						//把5000改成8080 找8080代理服务器要数据 要加/students
					response => {
						console.log('请求成功了',response.data)//打印response的data 不用全部打印
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:5001/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			},
			getStudents2(){
				
					axios.get('http://localhost:8080/myserver/students').then(
						
					response => {
						console.log('请求成功了',response.data)//打印response的data 不用全部打印
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			},
			getCars2(){
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			},
		},
	}
</script>
