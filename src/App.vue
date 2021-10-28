<!--
 * @Author: your name
 * @Date: 2021-10-21 20:47:50
 * @LastEditTime: 2021-10-27 21:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\App.vue
-->
<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'
export default {
  name:'App',
  components:{
    MainTabBar
  }
}
</script>
<style>
  @import "~@/assets/css/base.css";
</style>
