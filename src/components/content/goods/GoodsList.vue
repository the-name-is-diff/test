<!--
 * @Author: your name
 * @Date: 2021-10-23 21:08:56
 * @LastEditTime: 2021-10-27 20:08:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\goods\GoodsList.vue
-->
<template>
  <div class="goods-list">
        <goods-list-item v-for="item in goods" :key=item.index :items="item" ></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
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