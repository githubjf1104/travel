<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont back-icon">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">{{this.city}}
				<span class="iconfont arrow-icon">&#xe600;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name:'HomeHeader',
	props:{
		city:String
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
	.header
		display:flex
		line-height: .86rem
		background:$bgColor
		color:#fff
		.header-left
			with:.86rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
				padding:0 .1rem
		.header-input
			flex:1
			background:#fff
			height:0.64rem
			line-height:0.64rem
			margin:.12rem .2rem
			padding-left:.2rem
			border-radius:0.1rem
			color:#ccc
		.header-right
			padding:0 .2rem
			with:1.24rem
			float:right
			text-align:center
			font-size:0.3rem
			color:#fff
			.arrow-icon
				margin-left:-.04rem
				font-size:.24rem
</style>