<template>
	<div>
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconsList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
	name:'Home',
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			swiperList:[],
			iconsList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json').then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.swiperList = data.swiperList
				this.iconsList = data.iconsList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
		}
	},
	mounted () {
		this.getHomeInfo()
	}
}
</script>

<style>

</style>