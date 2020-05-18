// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

import rem from '@/assets/js/rem'

Vue.config.productionTip = false

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import '@/assets/css/reset.css'
import 'swiper/css/swiper.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
