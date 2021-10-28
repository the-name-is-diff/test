<!--
 * @Author: your name
 * @Date: 2021-10-26 22:09:19
 * @LastEditTime: 2021-10-27 23:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :cGoods="Goods"></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import {getDetail , Goods} from 'network/detail.js'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
export default {
  name:"Detail",
  data(){
    return {
      iid:null,
      topImages:{
        type:Array,
        default(){
          return [];
        }
      },
      Goods:null,
      
    }
  },
  methods:{

  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages = res.data.result.itemInfo.topImages
      console.log(res);
      const temp = res.data.result
      this.Goods = new Goods(temp.itemInfo,temp.columns,temp.shopInfo.services,temp.itemInfo.discountBgColor);
      console.log(this.Goods);
    })
  }
}
</script>

<style scoped>
.leftBack{
  width: 35px;
}
</style>