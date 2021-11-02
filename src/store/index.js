/*
 * @Author: your name
 * @Date: 2021-10-21 20:47:50
 * @LastEditTime: 2021-11-01 22:27:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    
  },
  actions: {
    addCart(state,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct = null;
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item;
        }
      }
      if(oldProduct){
        oldProduct.count +=1;
        resolve('当前商品数量+1')
      }
      else{
        payload.count = 1
        state.cartList.push(payload)
        resolve('已将当前商品添加到购物车')
      }
      })
    }
  },
  modules: {
  }
})
