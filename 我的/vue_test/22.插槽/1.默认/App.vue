<template>
	<div class="container">
        <Category name='美食'>
            <img src='./assets/1.jpg' alt="">
			
		
			
        </Category>
        <Category name='游戏'>
            <ul>
                <li v-for = '(item,index) in games' :key='index'>{{item}}</li>
            </ul>
        </Category>
        <Category name='电影'>
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
        width: 700px;
        margin: 0 auto;
        margin-top:100px;
	}
</style>
