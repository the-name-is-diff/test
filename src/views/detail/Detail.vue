<!--
 * @Author: your name
 * @Date: 2021-10-26 22:09:19
 * @LastEditTime: 2021-10-30 22:13:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
      <detail-nav-bar class="detailnavbar"  @titleClick="navBarClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="detailScroll" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :cGoods="Goods"></detail-base-info>
      <detail-shop-info :cShopInfo="Shop"></detail-shop-info>
      <detail-goods-info :detailInfo="GoodsShow" @imgLoad="detailImgLoad"></detail-goods-info>
      <detail-goods-params :cGoodsParams="GoodsParams" ref="params"></detail-goods-params>
      <detail-goods-comments :cGoodsComments="GoodsComments" ref="comments"></detail-goods-comments>
      <goods-list :goods="Recommend" ref="recommend"></goods-list>
    </scroll>
      <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
  import DetailGoodsComments from './childComps/DetailGoodsComments.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import Scroll from 'components/common/scroll/Scroll.vue'
  import {
    getDetail,
    Goods,
    GoodsParams,
    GoodsComments,
    getRecommend,
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
      GoodsParams:null,
      GoodsComments:null,
      Recommend:[],
      TabBarTopYs:[],
      currentIndex:0
      
    }
  },
  methods:{
    detailImgLoad(){
      this.$refs.detailScroll.scroll.refresh();
      this.TabBarTopYs = [];
      this.TabBarTopYs.push(0);
      this.TabBarTopYs.push(this.$refs.params.$el.offsetTop)
      this.TabBarTopYs.push(this.$refs.comments.$el.offsetTop)
      this.TabBarTopYs.push(this.$refs.recommend.$el.offsetTop)
    },
    navBarClick(index){
      this.$refs.detailScroll.scroll.scrollTo(0,-this.TabBarTopYs[index],300)
    },
    contentScroll(position){
      let positionY = -position.y
      const length = this.TabBarTopYs.length;
      for(let i = 0; i<length ; i++){
        if(this.currentIndex!=i&&((i<length-1&&positionY>=this.TabBarTopYs[i]&&positionY<this.TabBarTopYs[i+1])||(i === length -1 &&positionY >= this.TabBarTopYs[i]))){
        this.currentIndex = i;
        this.$refs.nav.currentIndex = this.currentIndex
        console.log(this.currentIndex);
        }
      }
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailGoodsComments,
    DetailBottomBar,
    GoodsList,
    Scroll
  },
  mounted(){
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages = res.data.result.itemInfo.topImages
      // console.log(res);
      const temp = res.data.result
      this.Goods = new Goods(temp.itemInfo,temp.columns,temp.shopInfo.services,temp.itemInfo.discountBgColor);
      this.Shop = new Shop(temp.shopInfo)
      this.GoodsShow = temp.detailInfo;
      this.GoodsParams = new GoodsParams(temp.itemParams);
      this.GoodsComments = new GoodsComments(temp.rate);    

    })
    getRecommend().then(res=>{
      this.Recommend = res.data.data.list;
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
  z-index: 2000;
  background-color: #fff;
  height: 100vh;
}
.detailnavbar{
  background-color: #fff;
}
.content{
  height: calc(100% - 89px);
}
</style>