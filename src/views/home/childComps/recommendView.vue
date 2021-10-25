<!--
 * @Author: your name
 * @Date: 2021-10-23 10:37:24
 * @LastEditTime: 2021-10-25 09:57:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\views\home\childComps\recommendView.vue
-->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in crecommend" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    crecommend:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  text-align: center;
  font-size: 16px;
  /* margin-top: -5px; */
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 0.2rem;
}
.recommend-item{
  flex: 1;
  padding: 0.5rem 0 1.5rem 0;
  border-bottom: 0.6rem #eee solid;
}
</style>