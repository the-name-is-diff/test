<!--
 * @Author: your name
 * @Date: 2021-10-26 22:09:19
 * @LastEditTime: 2021-10-28 22:55:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <scroll class="content">
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :cGoods="Goods"></detail-base-info>
      <detail-shop-info :cShopInfo="Shop"></detail-shop-info>
      <detail-goods-info :detailInfo="GoodsShow"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

  import Scroll from 'components/common/scroll/Scroll.vue'
  import {
    getDetail,
    Goods,
    Shop,
  } from 'network/detail.js'
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
      Shop:null,
      GoodsShow:null,
      
    }
  },
  methods:{

  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  created(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages = res.data.result.itemInfo.topImages
      // console.log(res);
      const temp = res.data.result
      this.Goods = new Goods(temp.itemInfo,temp.columns,temp.shopInfo.services,temp.itemInfo.discountBgColor);
      this.Shop = new Shop(temp.shopInfo)
      this.GoodsShow = temp.detailInfo;
      console.log(res);
      console.log(this.Shop);
      console.log(this.GoodsShow);

    })
  }
}
</script>

<style scoped>
.leftBack{
  width: 35px;
}
#detail{
  position: relative;
  z-index: 3000;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 40px);
}
</style>