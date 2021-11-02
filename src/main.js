/*
 * @Author: your name
 * @Date: 2021-10-21 20:47:50
 * @LastEditTime: 2021-11-01 22:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
Vue.config.productionTip = false

FastClick.attch(document.body);
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')