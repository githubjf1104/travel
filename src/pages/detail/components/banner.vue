<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1910/1c/1c8f8e8a50115fa6a3.water.jpg_600x330_0f100cf2.jpg">
			<div class="banner-info">
				<div class="banner-title">
				深圳欢乐谷(AAAAA景区)
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe66a;</span>
					48
				</div>
			</div>
		</div>
		<common-gallary 
		:imgs="imgs" 
		v-show="showGrallary"
		@close="handleGrallaryClose"
		></common-gallary>
	</div>
</template>

<script>
import CommonGallary from '@/common/gallary/gallary'
export default {
	name:'DetailBanner',
	data () {
		return {
			showGrallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1807/33/3359ac3a4bdd2b30a3.water.jpg_350x240_4ec28049.jpg','http://img1.qunarzz.com/sight/p0/1412/4b/632fe62f622b9b112cdf9f3b80ce8f78.water.jpg_350x240_411eebed.jpg']
		}
	},
	methods: {
		handleBannerClick () {
			this.showGrallary = true
		},
		handleGrallaryClose () {
			this.showGrallary = false
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
			.banner-title
				flex:1
				font-szie:.32rem
				padding:0 .2rem
			.banner-number
				height:.32rem
				line-height:.32rem
				padding:0 .4rem
				margin-top:.14rem
				border-radius:.2rem
				background:rgb(0,0,0,.8)
				font-szie:.24rem
				.banner-icon
					font-szie:.24rem
</style>