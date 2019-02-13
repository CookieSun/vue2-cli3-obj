import Vue from 'vue'

import App from './App.vue'
import router from './router'
// import store from './store'
import { Swipe, SwipeItem } from 'vue-swipe';

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/css/bootstrap.css'
// import './assets/css/bootstrap.css'

import axios from './plugins/axios';//安装axios插件
Vue.use(axios);

// Object.keys(fillters).forEach(key=>Vue.filter(key,fillters[key]))


//安装通用组件
import loading from './components/loading'
Vue.use(loading);


new Vue({
	data:{
	  // bNav:true,
	  bFoot:true,
	  bLoading:false
	},
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
