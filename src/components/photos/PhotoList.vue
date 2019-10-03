<template>
	<div>
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id === 0 ?'mui-active' : '']" v-for="item in tabbar" :key="item.id" 
					data-wid="tab-top-subpage-1.html" @click="getList(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>	
		</div>
		<ul class="ul-image">
			<li class="li-image" v-for="items in list" :key="items.id">
				<router-link :to="'/home/photoinfo/'+items.id" @click.native="click">
					<img v-lazy="items.img_url">
					<div class="background-font">
						<h2>{{items.title}}</h2>
						<div class="content">{{items.zhaiyao}}</div>
					</div>			
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	import Toast from 'mint-ui'
	export default{
		data(){
			return{
				tabbar: [],
				list: []
			}
		},
		created() {
			this.getTabbar()
			this.getList(0)
		},
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods:{
			getTabbar(){
				this.$http.get("api/getimgcategory").then(result =>{
					if(result.body.status === 0 ){
						result.body.message.unshift({title:"全部",id: 0})
						this.tabbar = result.body.message
					}else{
						Toast('获取数据失败')
					}
				})
			},
			getList(id){
				this.$http.get("api/getimages/"+id).then(result => {
					if(result.body.status === 0){
						this.list = result.body.message
					}else{
						Toast('获取数据失败')
					}
					})
			}
		}
	}
</script>

<style>
	*{
		touch-action: pan-y;
	}
	img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	
	.ul-image{
		padding: 0 5px;
		bottom: 0;
	}
	.ul-image .li-image{
		list-style:none;
		margin-bottom: 10px;
		position: relative;
	}
	.ul-image .li-image img{
		width: 100%;
		box-shadow: 0 0 5px;
		background-color: #929292;
	}
	.background-font{
		position: absolute;
		bottom: 0;
		color: white;
		background-color: rgba(0,0,0,0.4);
		max-height: 80px;
	}
	.background-font h2{
		font-size: 14px;
	}
	.background-font .content{
		font-size: 13px;
	}
</style>
