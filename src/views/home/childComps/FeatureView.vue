<!--
 * @Author: your name
 * @Date: 2021-10-23 11:19:27
 * @LastEditTime: 2021-10-27 20:05:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\FeatureView.vue
-->
<template>

  <div class="feature">
    <h2>本周特卖</h2>
    <div class="item-total">
      <div class="item1">
        <div class="feature-item" v-for="item in crecommend" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}} </p>
      </a>
    </div>
      </div>
   <div class="item2">
      <div class="feature-item" v-for="item in crecommend" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}} </p>
      </a>
    </div>
   </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'FeatureView',
  data(){
    return {

    }
  },
  props:{
    crecommend:{
    type:Array,
    default(){
      return []
    }
  }
  }
}
</script>

<style>
  h2{
    padding: 10px 0;
  }
  .feature{
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .item-total{
    display: flex;
    flex-direction: column;
  }
  .item1{
    display: flex;
  }
  .item2{
    display:flex;
  }
  .feature-item{
    flex: 1;
  }
  .feature-item img{
    width: 4rem;
    height: 4rem;
  }
</style>