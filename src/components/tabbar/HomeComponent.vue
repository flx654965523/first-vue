<template>
	<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for='item in lunbotuList' :key='item.id'>
				<img :src='item.img' />
			</mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9 ul">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">图片分享</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">联系我们</div></a></li>
		</ul> 
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				lunbotuList : []
			}
		},
		created() {
			this.getLunbotu()
		},
		methods:{
			getLunbotu(){
				this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
					if(result.body.status === 0){
						this.lunbotuList = result.body.message
					}else{
						Toast('数据获取失败')
					}
				})
			}
		}
	}
</script>

<style>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
		background: red;
	}	
	.mint-swipe-item:nth-child(2){
		background-color: green;
	}
	.mint-swipe-item:nth-child(3){
		background-color: blue;
	}		
	.mint-swipe-item img{
		height: 100%;
		width: 100%;
	}
	.ul{
		background-color: white !important;
		border: 0 !important;
	}
	
	.ul li {
		background-color: white !important;
		border: 0 !important;
	}
</style>
