<!--
 * @Author: your name
 * @Date: 2021-10-27 20:39:45
 * @LastEditTime: 2021-10-30 15:37:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\navbar\NavBar.vue
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
  name:'NavBar',
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
   background-color: #fff;
 }
 .left , .right{
   width: 60px;
 }
 .center{
   flex:1;
 }
 </style>
