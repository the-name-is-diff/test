<template>
  <swiper>
    <swiper-item v-for="item in cbanners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    cbanners:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style>

</style>