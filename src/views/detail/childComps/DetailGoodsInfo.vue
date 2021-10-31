<!--
 * @Author: your name
 * @Date: 2021-10-28 22:50:12
 * @LastEditTime: 2021-10-30 15:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsInfo.vue
-->
<template>
  <div class="DetailGoodsInfo" v-if="detailInfo">
    <p class="desc">{{detailInfo.desc}}</p>
    <p class="result">{{detailInfo.detailImage[0].key}}</p>
    <div class="showImage" v-for="item in detailInfo.detailImage[0].list" :key="item.index">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:null
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style>
.DetailGoodsInfo{
  width: 100%;
  margin-top: 20px;
}
.DetailGoodsInfo p{
  margin: 20px 0;
  font-size: 16px;
  color: black;
}
.desc{
  text-indent: 30px;
  padding-bottom: 10px;
  border-bottom: 5px solid #eee;
}
.showImage img{
  width: 100%;
}
</style>