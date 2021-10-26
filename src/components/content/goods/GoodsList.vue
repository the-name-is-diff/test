<template>
  <div class="goods-list">
        <goods-list-item v-for="item in goods" :key=item.index :items="item" ></goods-list-item>
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
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  /* flex-grow: 0; */
  /* flex-shrink: 0; */
  /* column-count: 2; */
} 

</style>