<template>
	<div class="container">
        <Category name='美食'>
            <img slot = 'top' src='./assets/1.jpg' alt="">
			<div class="box" slot = 'bottom'>
				<a  href="">更多美食</a>
			</div>
        </Category>
        <Category name='游戏'>
            <ul slot = 'top'>
                <li v-for = '(item,index) in games' :key='index'>{{item}}</li>
            </ul>

			<div class="box" slot = 'bottom'>
				<a  href="">单机游戏</a>
				<a  href="">网络游戏</a>
			</div>
			
        </Category>
        <Category name='电影'>
            <video slot = 'top' controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template slot = 'bottom'>
				<div class="box" >
				<a  href="">推荐</a>
				<a  href="">热门</a>
				</div>
				<div class="box" >
				<h4 >欢迎来到影院</h4>
				</div>
			
			</template>
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

	.box{
		display: flex;
		justify-content: space-around;
	}
</style>
