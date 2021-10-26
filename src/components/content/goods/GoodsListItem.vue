<!--
 * @Author: your name
 * @Date: 2021-10-23 21:09:16
 * @LastEditTime: 2021-10-25 19:57:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods-item">
    <img :src="items.show.img" alt="" @load="imgLoad">
    <div class="item-info">
      <p class="title">{{items.title}} </p>
      <span class="price">￥ {{items.price}} </span>
      <span class="collect">收藏{{items.cfav}} </span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    }
  },
  props:{
    items:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.goods-item{
  width: 48%;
  padding: 5px;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.item-info{
  width: 100%;
  text-align: center;
}
.item-info .title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


</style>