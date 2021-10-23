<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <span class="iconfont" slot="item-icon">&#xe70e;</span>
      <span class="iconfont" slot="item-icon-active">&#xe8c7;</span>
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="yellow">
        <span class="iconfont" slot="item-icon">&#xe64f;</span>
        <span class="iconfont" slot="item-icon-active">&#xe67d;</span>
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="orange">
        <span class="iconfont" slot="item-icon">&#xe63f;</span>
        <span class="iconfont" slot="item-icon-active">&#xe73c;</span>
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="gray">
        <span class="iconfont" slot="item-icon">&#xe8bb;</span>
        <span class="iconfont" slot="item-icon-active">&#xe8c6;</span>
        <p slot="item-text">我的</p>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
 @import url('~@/assets/css/iconfont/iconfont.css');
</style>