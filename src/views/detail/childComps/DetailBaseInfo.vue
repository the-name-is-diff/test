<!--
 * @Author: your name
 * @Date: 2021-10-27 22:15:18
 * @LastEditTime: 2021-10-29 09:19:34
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
      <div class="service-item" v-for="item in cGoods.services" :key="item.index">
        <img :src="item.icon" alt="">
        <span>{{item.name}} </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    // console.log(this.cGoods);
  },
  props:{
    cGoods:{},
  }
}
</script>

<style scoped>
.DetailNaseInfo{
  margin-top: 10px;
}
.title{
  color: black;
  font-size: 18px;
}
.price{
  margin: 10px 0;
  align-items: center;
}
.nowprice{
  font-size: 20px;
  color: rgb(225,153,179);
  margin-right: 20px;
}
.highprice{
  text-decoration-line: line-through;
  font-size: 12px;
  color: gray;
  align-items: center;
}
.columns{
  height: 40px;
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-bottom: 2px solid #eee;
  font-size: 12px;
  line-height: 40px;
  align-items: center;
}
.service-item{
  /* line-height: 20px; */
  display: flex;
  font-size: 12px;
  justify-content: center;
  line-height: normal;
}
.service-item img {
  height: 15px;
  margin-right: 5px;
}
.services{
  display: flex;
  height: 40px;
  padding-top: 10px;
  justify-content: space-between;
  border-bottom: 7px #eee solid;
  font-size: 12px;
  
}
</style>