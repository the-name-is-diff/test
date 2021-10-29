/*
 * @Author: your name
 * @Date: 2021-10-21 20:47:50
 * @LastEditTime: 2021-10-28 16:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Category from '../views/category/category.vue'
import Cart from '../views/cart/cart.vue'
import Profile from '../views/profile/profile.vue'
import Detail from '../views/detail/Detail.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }];
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
