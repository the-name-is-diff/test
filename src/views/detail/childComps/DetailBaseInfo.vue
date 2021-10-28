<!--
 * @Author: your name
 * @Date: 2021-10-27 22:15:18
 * @LastEditTime: 2021-10-27 23:27:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailBaseInfo.vue
-->
<template>
  <div class="DetailNaseInfo">
    <div class="title">{{cGoods.title}} </div>
    <div class="price">
      <span class="nowprice">￥ {{cGoods.lowprice}} </span>
      <span class="highprice">￥ {{cGoods.highprice}} </span>
    </div>
    <div class="columns">
      <div>{{cGoods.columns[0]}} </div>
      <div>{{cGoods.columns[1]}} </div>
      <div class="service-item">
        <img :src="cGoods.services[0].icon" alt="">
        <span>{{cGoods.services[0].name}} </span>
      </div>
    </div>
    <div class="services">  
      <div class="service-item">
        <img :src="cGoods.services[1].icon" alt="">
        <span>{{cGoods.services[1].name}} </span>
      </div>
        <div class="service-item">
        <img :src="cGoods.services[2].icon" alt="">
        <span>{{cGoods.services[2].name}} </span>
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.cGoods);
  },
  props:{
    cGoods:null,
  }
}
</script>

<style scoped>
.title{
  color: black;
  font-size: 18px;
}
.price{
  align-items: center;
}
.nowprice{
  font-size: 20px;
  color: rgb(225,153,179);
  margin-right: 20px;
}
.highprice{
  text-decoration-line: line-through;
  font-size: 14px;
  color: gray;
  align-items: center;
}
.columns{
  height: 40px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.service-item{
  height: 20px;
  line-height: 20px;
}
.service-item img {
  height: 15px;
}
.services{
  display: flex;
  height: 40px;
  padding-bottom: 10px;
  justify-content: space-between;
  border-bottom: 7px #eee solid;
}
</style>