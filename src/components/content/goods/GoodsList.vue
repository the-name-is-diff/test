<template>
  <div class="goods-list">
      <!-- <div class="goods-list-item"> -->
        <goods-list-item v-for="item in goods" :key=item.index :items="item"></goods-list-item>
      <!-- </div> -->
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
export default {
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>