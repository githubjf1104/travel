<template>
	<div class="weekend-title">
		<div class="weekend-word">周末去哪</div>
		<ul>
			<li class="item" v-for="item of weekendList"
			:key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeWeekend',
	data () {
		return {
			weekendList:[{
				id:'0001',
				imgUrl:'https://imgs.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
				title:'登高望远秋色佳',
				desc:'山顶满眼彩色，此情此景醉了'
			},{
				id:'0002',
				imgUrl:'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
				title:'寻找北京的皇城范儿',
				desc:'数百年的宫廷庙宇，至今依旧威严霸气'
			},{
				id:'0003',
				imgUrl:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
				title:'京城周末撒欢',
				desc:'在帝都过周末，不仅仅是城中游！'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
	.weekend-title
		line-height:.8rem
		margin-top:.2rem
		background:#eee
		text-indent:.2rem
	.weekend-word
		font-size:.4rem
	.item-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:33.9%
		.item-img
			width:100%
	.item-info
		padding:.2rem
		min-width:0
		.item-title
			 line-height:.54rem
			 font-size:.32rem
			 ellipsis()
		.item-desc
			line-height:.5rem
			color:#ccc
			ellipsis()
				
</style>