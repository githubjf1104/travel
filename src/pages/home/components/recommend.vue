<template>
	<div class="recommend-title">
		<div class="recommend-word">热销推荐</div>
		<ul>
			<router-link tag="li"
			class="item border-bottom" 
			v-for="item of list"
			:key="item.id"
			:to="'/detail/' + item.id"
			>
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	name:'HomeRecommend',
	props:{
		list:Array
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
			width:2rem
			height:2rem
			padding:.2rem
		.item-info
			flex:1
			padding:.1rem
			min-width:0
			.item-title
				 line-height:.5rem
				 font-size:.3rem
				 ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			.item-button
				line-height:.5rem
				background:#ff9300
				color:#fff
				margin-bottom:.1rem
				padding:0 .3rem
				border-radius:0.2rem

				
</style>