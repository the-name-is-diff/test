<!--
 * @Author: your name
 * @Date: 2021-10-21 23:05:52
 * @LastEditTime: 2021-11-01 20:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\cart.vue
-->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        购物车({{CartLength}})
      </template>
    </nav-bar>
    <scroll class="content" ref="cartScroll">
      <cart-list class="cart-list" :productArray="CartList"></cart-list>
    </scroll>
    <cart-bottom-bar :CartLength="CartLength"></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  name:'cart',
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  activated(){
    this.$refs.cartScroll.refresh();
  },
  computed:{
    CartLength(){
      return this.$store.state.cartList.length;
    },
    CartList(){
      return this.$store.state.cartList
    }
  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
  width: 100%;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  width: 100%;
  height: calc(100% - 129px);
}
</style>