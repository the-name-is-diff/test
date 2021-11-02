<!--
 * @Author: your name
 * @Date: 2021-10-31 19:35:21
 * @LastEditTime: 2021-10-31 20:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CartList.vue
-->
<template>
  <div class="CartList" >
    <cart-list-item v-for="item in productArray" :key="item.index" :product="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from './CartListItem.vue'
export default {
  props:{
    productArray:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CartListItem
  }
}
</script>

<style scoped>
.CartList{
  height: 100%;
}
</style>