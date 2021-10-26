<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
     <tab-control :titles="['流行','新款','竞选']" @tabclick="tabClick" v-show="istabshow"  class="tab-control1"></tab-control>
    <scroll class="content" ref="scroll" @scroll="contentscroll" @pullingUp="contentUp">
      <home-swiper :cbanners="banner" @swiperImgLoad="SwiperLoad"></home-swiper>
      <recommend-view :crecommend="recommend"></recommend-view>
      <feature-view :crecommend="recommend"></feature-view>
      <tab-control :titles="['流行','新款','竞选']" @tabclick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="goods[type].list" ></goods-list>
    </scroll>
    <back-top @click.native="upClick" v-show="isUpTopShow"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import recommendView from './childComps/recommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'

  import TabControl from 'components/content/tabControl/TabControl.vue'

  import { 
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
export default {
  components:{
    NavBar,
    HomeSwiper,
    recommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      type:'pop',
      isUpTopShow : false,
      topoffsetTop : 0,
      istabshow:false,
    }
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted(){
    this.$bus.$on("itemImgLoad",()=>{
      this.$refs.scroll.scroll.refresh()
      });

  },
  methods:{
    /**
     * @description: 网络请求函数
     * @param {*}
     * @return {*}
     */    
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
    },
    getHomeGoods(type){
      let page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp();
      })
      // this.$refs.scroll.finishPullUp();
    },
  /**
   * @description: 事件监听函数
   * @param {*}
   * @return {*}
   */
    tabClick(index){
      switch(index){
        case 0 :
          this.type = 'pop'
          break;
        case 1:
          this.type = 'new'
          break;
        case 2:
          this.type = 'sell'
      }
    },
    upClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentscroll(position){
      this.isUpTopShow = position.y <-1000
      this.istabshow = position.y < -this.topoffsetTop 
      console.log(position);
      console.log(this.topoffsetTop);
    },
    contentUp(){
      this.getHomeGoods(this.type)
      // console.log(123123123312132123);
    },
    debounce(func,delay){
      let timer = null;
      return function(...args){
        if(timer){
          clearTimeout(timer)
        }
        timer = setTimeout(()=>{
          func()
        },delay)
      }
    },
    SwiperLoad(){
      this.topoffsetTop = this.$refs.tabControl.$el.offsetTop -20
      console.log(this.topoffsetTop);
    }
  }
}
</script>

<style scoped>
.home{
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;

}
.home{
  height: 100vh;
}
.content{
  height: calc(100% - 89px);
}
.tab-control1{
  width: 100%;
  position: absolute;
  z-index: 2000;
}
</style>