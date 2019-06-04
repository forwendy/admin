import Vue from 'vue'
import router from './router' // 路由配置
import store from './store'
import axios from './api' // 请求配置
import App from './App.vue'

// 引入ElementUI
import ElementUI from 'element-ui'
import './assets/scss/element-variables.scss'

Vue.use(ElementUI)

// 绑定请求方法
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')