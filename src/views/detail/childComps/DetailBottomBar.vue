<!--
 * @Author: your name
 * @Date: 2021-10-30 21:56:03
 * @LastEditTime: 2021-10-30 22:15:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailBottomBar.vue
-->
<template>
  <div class="DetailBottomBar">
    <div class="function-wrapper1">
      <div class="servicer">
      <i class="iconfont">&#xe617;</i>
      <p>客服</p>
    </div>
    <div class="store">
      <i class="iconfont">&#xe736;</i>
      <p>商店</p>
    </div>
    <div class="collection">
      <i class="iconfont">&#xe643;</i>
      <p>收藏</p>
    </div>
    </div>
    <div class="function-wrapper">
      <div class="shopcart">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* Project id 2871323 */
  src: url('https://at.alicdn.com/t/font_2871323_o2bxqz7gk3f.woff2?t=1635602034412') format('woff2'),
       url('https://at.alicdn.com/t/font_2871323_o2bxqz7gk3f.woff?t=1635602034412') format('woff'),
       url('https://at.alicdn.com/t/font_2871323_o2bxqz7gk3f.ttf?t=1635602034412') format('truetype');
}
.DetailBottomBar{
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0px;
  height: 49px;
  z-index: 4000;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}
.function-wrapper1{
  width: calc(100% - 160px);
  display: flex;
  justify-content: space-around;
}
.servicer{
  text-align: center;
}
.store{
  text-align: center;
}
.collection{
  text-align: center;
}
.function-wrapper{
  display: flex;
}
.shopcart{
  width: 80px;
  text-align: center;
  line-height: 49px;
  background-color: rgb(200,208,102);
  color: black;
}
.buy{
  width: 80px;
  text-align: center;
  line-height: 49px;
  background-color: rgb(255,120,154);
  color: #fff;
}
</style>