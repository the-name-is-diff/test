<!--
 * @Author: your name
 * @Date: 2021-10-23 21:09:16
 * @LastEditTime: 2021-10-28 12:32:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods-item" @click="showdetail">
    <div class="item-content">
      <img :src="items.show.img" alt="" @load="imgLoad">
    <div class="item-info">
      <p class="title">{{items.title}} </p>
      <span class="price">￥ {{items.price}} </span>
      <span class="collect">收藏{{items.cfav}} </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    },
    showdetail(){
      this.$router.push('/detail/'+this.items.iid)
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
  /* display: inline-block; */
  /* height: 100%; */
  /* overflow: auto; */
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