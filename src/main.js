// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端300毫秒点击延迟问题
import fastClick from 'fastclick'
//轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
//基础样式的修饰
import './assets/styles/reset.css'
//1px 边框问题
import './assets/styles/border.css'
//字体
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
