<!--
 * @Author: your name
 * @Date: 2021-10-23 09:58:03
 * @LastEditTime: 2021-10-28 23:17:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\views\home\childComps\HomeSwiper.vue
-->
<template>
    <swiper ref="swiper">
    <swiper-item v-for="item in cbanners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  dtat(){
    return {
     isLoadOver:false,
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoadOver){
         this.$emit('swiperImgLoad')
         this.isLoadOver = true
      }
    },
     stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
  },
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

<style scoped>
</style>