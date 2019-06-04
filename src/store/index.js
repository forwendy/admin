import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const store = new Vuex.Store({
  state: {
    leftCollapse: false,
    activeMenu: null,
  },
  getters,
  actions,
  mutations,
  modules: {

  }
})

// 保存初始值
store.state.init = JSON.parse(JSON.stringify(store.state))

// 将store连接到应用
export default store
