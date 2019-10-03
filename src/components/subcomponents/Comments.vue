<template>
	<div class="big-container">
		<h2>发表评论</h2>
		<hr>
		<textarea placeholder="请输入要发表的内容(最多输入120个字)" maxlength="120" v-model="msg"></textarea>
		<mt-button type="primary" size="large" @click="saveComment">发表评论</mt-button>
		<div>
			<div class="item-list" v-for="(items,i) in commentsList" :key="items.add_time">
				<div class="item-li">
					<p class="title">第{{i+1}}楼用户：用户{{items.user_name}}，发表时间:{{items.add_time | dataFormat}}</p>
					<p class="content">
						{{items.content === 'undefined' ? '此用户没有评论': items.content}}
					</p>
				</div>
			</div>			
		</div>
		<mt-button type="danger" size="large" plain @click="getmore()">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return{
				pageindex: 1,
				commentsList: [],
				msg: ""
			}
		},
		created() {
			this.getComments()
		},
		methods:{
			getComments(){
				this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex)
				.then(result => {
					if(result.body.status === 0){
						this.commentsList = this.commentsList.concat(result.body.message)
					}else{
						Toast('获取评论失败')
					}
				})
			},
			getmore(){
				this.pageindex++
				this.getComments()
			},
			saveComment(){
				if(this.msg.trim().length === 0){
					Toast("请输入评论内容")
				}
				this.$http.post("api/postcomment/"+this.$route.params.id,{
					content: this.msg.trim()
				})
				.then(result => {
					if(result.body.status === 0 ){
						var com = {
							user_name: "匿名用户",
							add_time: Date.now(),
							content: this.msg.trim()
						}
						this.commentsList.unshift(com)
						this.msg = ""
					}else{
						Toast("评论保存失败")
					}
				})
				
			}
		},
		props: ["id"]
	}
</script>

<style>
	.big-container textarea{
		height: 100px;
	}
	.big-container .item-list p{
		color: #000000;
	}
	.big-container .item-list .title{
		background-color: #CCCCCC;
		line-height: 30px;
		margin: 3px 0;
	}
	.big-container .item-list .content{
		margin: 5px 0;
		text-indent: 2em;
	}
</style>
