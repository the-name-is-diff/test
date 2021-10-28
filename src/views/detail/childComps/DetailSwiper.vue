<!--
 * @Author: your name
 * @Date: 2021-10-27 15:12:09
 * @LastEditTime: 2021-10-27 20:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailSwiper.vue
-->
<template>
  <swiper class="swiper1">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img  :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

  import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{}

  }
}
</script>

<style>
.swiper1{
  height: 300px;
  overflow: hidden;
}
</style>