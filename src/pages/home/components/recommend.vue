<template>
	<div class="recommend-title">
		<div class="recommend-word">热销推荐</div>
		<ul>
			<li class="item" v-for="item of recommendList"
			:key="item.id">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeRecommend',
	data () {
		return {
			recommendList:[{
				id:'0001',
				imgUrl:'https://imgs.qunarzz.com/sight/p0/1506/e8/e87354c876fd6c38.water.jpg_200x200_9c11d922.jpg',
				title:'北宫国家深林公园',
				desc:'五彩斑斓，层林尽染，分分钟随手一拍就是美图'
			},{
				id:'0002',
				imgUrl:'https://imgs.qunarzz.com/sight/p0/201311/12/3e2de7e7f2fa170fc8d65eac.jpg_200x200_015edb8c.jpg',
				title:'八达岭野生动物园',
				desc:'五彩斑斓，层林尽染，分分钟随手一拍就是美图'
			},{
				id:'0003',
				imgUrl:'https://imgs.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
				title:'太平洋海底世界',
				desc:'五彩斑斓，层林尽染，分分钟随手一拍就是美图'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
	.recommend-title
		line-height:.8rem
		margin-top:.2rem
		background:#eee
		text-indent:.2rem
	.recommend-word
		font-size:.4rem
	.item
		overflow:hidden
		display:flex
		height:1.9rem
		.item-img
			width:1.7rem
			height:1.7rem
			padding:0 .1rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				 line-height:.54rem
				 font-size:.32rem
				 ellipsis()
			.item-desc
				line-height:.5rem
				color:#ccc
				ellipsis()
			.item-button
				line-height:.5rem
				background:#ff9300
				color:#fff
				padding:0 .3rem
				border-radius:0.2rem

				
</style>