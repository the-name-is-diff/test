<template>
  <div class="goods-item">
    <img :src="items.show.img" alt="">
    <div class="item-info">
      <p class="title">{{items.title}} </p>
      <span class="price">￥ {{items.price}} </span>
      <span class="collect">收藏{{items.cfav}} </span>
    </div>
  </div>
</template>

<script>
export default {
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