<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">
				{{this.sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe66a;</span>
					{{this.bannerImgs.length}}
				</div>
			</div>
		</div>
		<common-gallary 
		:imgs="bannerImgs" 
		v-show="showGrallary"
		@close="handleGrallaryClose"
		></common-gallary>
	</div>
</template>

<script>
import CommonGallary from '@/common/gallary/gallary'
export default {
	name:'DetailBanner',
	props: {
		sightName:String,
		bannerImg: String,
		bannerImgs: Array
	},
	data () {
		return {
			showGrallary: false
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