<!--
 * @Author: your name
 * @Date: 2021-10-28 20:22:30
 * @LastEditTime: 2021-10-29 22:50:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailShopInfo.vue
-->
<template>
  <div class="DetailShopInfo" v-if="cShopInfo">
    <div class="shopHeader">
      <div class="logo">
        <img :src="cShopInfo.logo" alt="">
      </div>
      <div class="name">
        <span>{{cShopInfo.name}}</span>
      </div>
    </div>
    <div class="info">
      <div class="sellsInfo">
        <div class="cSells">
          <p>{{(cShopInfo.cSells/1000).toFixed(1)}}万</p>
          <p>总销量</p>
        </div>
        <div class="goodsInfo">
          <p>{{cShopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="liner"></div>
      <div class="score">
        <div v-for="item in cShopInfo.score" :key="item.index" :class="{ 'shop-item' : true ,  better: item.isBetter}">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <div class="evaluate">{{item.isBetter===true ? '高' : '底' }}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    cShopInfo:null,
  }
}
</script>

<style scoped>
.shopHeader{
  display: flex;
  flex: 0;
  align-items: center;
  padding: 10px;
}
.shopHeader .logo{
  width: 60px;
  border-radius: 50%;
}
.shopHeader img{
  width: 100%;
}
.shopHeader .name{
  margin-left: 5px;
}
.sellsInfo{
  display: flex;
  color: black;
  font-weight: bold;
  font-size: 18px;
}
.info{
  display: flex;
}
.cSells{
  width: 80px;
  margin: 7px;
  text-align: center;
}
.cSells p{
  margin: 10px 0;
}
.cSells p:nth-child(2){
  font-size: 14px;
}
.goodsInfo{
  width: 80px;
  text-align: center;
  margin: 7px;
}
.goodsInfo p{
  margin: 10px 0;
}
.goodsInfo p:nth-child(2){
  font-size: 14px;
}
.liner{
  height: 100px;
  border-right: 1px solid black;
}
.score{
  margin-left: 20px;
}
.score span{
  display: inline-block;
  margin-right: 10px;
  font: 14px;
}
.evaluate{
  display: inline-block;
}
.score>div span:nth-child(2){
  color: rgb(255, 0, 0);
}
.shop-item{
  display: flex;
  justify-content: space-between;
}
.shop-item div{
  background-color:rgb(255,130,70);
  padding: 2px;
}
.better{
  color: rgb(255,130,70);
  
}
.better div{
  background-color:rgb(255,0 ,0 );
  color:rgb(255,255,255);
}
.shop-item{
  margin: 10px 0;
}
.score>div span:nth-child(1){
  color: black;
}
</style>