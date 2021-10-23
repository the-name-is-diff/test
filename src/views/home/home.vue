<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :cbanners="banner"></home-swiper>
    <recommend-view :crecommend="recommend"></recommend-view>
    <h2>首页</h2>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import recommendView from './childComps/recommendView.vue'
  import { getHomeMultidata } from 'network/home.js'
export default {
  components:{
    NavBar,
    HomeSwiper,
    recommendView
  },
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>