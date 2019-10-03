<template>
	<div class="newsinfo-container">
		<h3>{{newsinfo.title}}</h3>
		<p>
			<span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
			<span>点击{{newsinfo.click}}次</span>
		</p>
		<hr>
		<div class="news-content" v-html="newsinfo.content"></div>
		<comment :id="this.id"></comment>
	</div>	
</template>

<script>
	import {Toast} from 'mint-ui'
	import comments from '../subcomponents/Comments.vue'
	export default{
		data(){
			return{
				id: this.$route.params.id,
				newsinfo: []
			}
		},
		created(){
			this.getNewsinfo()
		},
		methods:{
			getNewsinfo(){
				this.$http.get('api/getnew/'+this.id).then(result => {
					if(result.body.status === 0){
						this.newsinfo = result.body.message[0]
					}else{
						Toast('数据获取失败')
					}
				})
			}
		},
		components: {
			'comment': comments
		}
	}
</script>

<style>
	.newsinfo-container{
		padding: 0 5px;
	}
	.newsinfo-container h3{
		font-size: 14px;
		color: red;
		margin: 10px 0;
		text-align: center;
	}
	.newsinfo-container p{
		font-size: 13px;
		color: blue;
		display: flex;
		justify-content: space-between;
	}
</style>
