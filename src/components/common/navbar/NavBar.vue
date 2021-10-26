<!--
 * @Author: your name
 * @Date: 2021-10-22 20:04:59
 * @LastEditTime: 2021-10-26 18:50:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\common\navbar\NavBar.vue
-->
 <template>
   <div class="nav-bar">
     <div class="left"><slot name="left"></slot></div>
     <div class="center"><slot name="center"></slot></div>
     <div class="right"><slot name="right"></slot></div>
   </div>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 .nav-bar{
   display: flex;
   height: 40px;
   line-height: 40px;
   text-align: center;
   box-shadow: 0px 2px 3px rgba(0,0,0,0.1);
   position: relative;
   z-index: 2000;
 }
 .left , .right{
   width: 60px;
 }
 .center{
   flex:1;
 }
 </style>