import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import movies from './modules/movies'
// import permission from './modules/permission';
import getters from './getters'
// import { createLSPlugin } from '@/utils/plugin'
// import ls from '@/utils/localStorage'
import createPersistedState from 'vuex-persistedstate' // vuex插件

// const LS_KEY = 'user' // localStorage key
// const lsData = ls.getItem(LS_KEY) // 获取本地数据
// const mapping = {
//   user: ['id', 'name', 'mail', 'Access-Token'], // 需要保存的键名
//   movies: ['types']
// }
// const mWhiteList = [] // mutation 白名单

// if (lsData) {
//   Object.assign(user, { state: lsData.val }) // 将本地数据恢复到 state
// }

Vue.use(Vuex)

// TODO: 这个恢复插件有问题，多模块出bug
// const plugin = createLSPlugin(LS_KEY, mapping, mWhiteList)
const store = new Vuex.Store({
  modules: {
    user,
    movies
  },
  getters,
  // plugins: [plugin]
  plugins: [createPersistedState()]
})

export default store
