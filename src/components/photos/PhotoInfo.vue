<template>
	<div class="big-container">
		<h1>{{list.title}}</h1>
		<p>
			<span class="time">发表时间：{{list.add_time | dataFormat}}</span>
			<span class="click">点击：{{list.click}}</span>
		</p>
		<hr>
		<div class="content" v-html="list.content"></div>
		<comment :id="this.id"></comment>
		
	</div>
</template>

<script>
	import Comments from '../subcomponents/Comments.vue'
	import Toast from 'mint-ui'
	export default{
		data(){
			return{
				id: this.$route.params.id,
				list: [],
			}
		},
		created() {
			this.getPhotoInfo()
		},
		methods:{
			getPhotoInfo(){
				this.$http.get("api/getimageInfo/"+this.id).then(result => {
					if(result.body.status === 0 ){
						this.list = result.body.message[0]
					}else{
						Toast("数据获取失败")
					}
				})
			}
		},
		components:{
			'comment': Comments
		}
	}
</script>

<style>
	.big-container{
		padding: 0 5px;
	}
	.big-container h1{
		font-size: 14px;
		color: #007AFF;
		text-align: center;
		line-height: 20px;
	}
	.big-container p{
		display: flex;
		justify-content: space-between;
	}
	.big-container .content{
		font-size:13px;
		line-height: 30px;
	}
</style>
