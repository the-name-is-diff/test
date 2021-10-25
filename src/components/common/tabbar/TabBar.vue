<!--
 * @Author: your name
 * @Date: 2021-10-21 22:13:55
 * @LastEditTime: 2021-10-24 14:43:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\common\tabbar\TabBar.vue
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem.vue'
export default {
}
</script>

<style>
#tab-bar{
   display: flex;
   background-color: #f6f6f6;
   height: 49px;
   position: fixed;
   z-index: 1001;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0 -1px 3px rgba(0,0,0,.1);
   text-align: center;
 }
</style>