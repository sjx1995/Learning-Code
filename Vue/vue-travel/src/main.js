// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端边框1像素问题
import 'styles/border.css'
// 初始化样式
import 'styles/reset.css'
// 引入字体文件
import 'styles/iconfont.css'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 解决部分手机300ms点击延迟的问题
import fastClick from 'fastclick'
// 引入vuex
import store from './store/index'

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
