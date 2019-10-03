<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="items in newsList" :key="items.id">
				<router-link :to="'/home/newsinfo/'+items.id">
					<img class="mui-media-object mui-pull-left" :src="items.img_url">
					<div class="mui-media-body">
						<h1>{{items.title}}</h1>
						<p class='mui-ellipsis'>						
							<span>发布时间{{items.add_time | dataFormat}}</span>
							<span>点击：{{items.click}}</span>
						</p>
					</div>
				</router-link>
			</li>		
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				newsList: []
			}
		},
		created(){			
			this.getNewsList()
		},
		methods: {	
			getNewsList(){
				this.$http.get('api/getnewslist').then(result => {
					if(result.body.status === 0){
						this.newsList = result.body.message
					}else{
						Toast('获取数据失败')
					}
				})
			}
		}
	}
</script>

<style>
	ul li h1{
		font-size: 14px;
	}
	ul li p{
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>
