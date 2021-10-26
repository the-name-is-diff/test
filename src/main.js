/*
 * @Author: your name
 * @Date: 2021-10-21 20:47:50
 * @LastEditTime: 2021-10-25 19:54:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
