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
}
.recommend-item img{
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.2rem;
}
.recommend-item{
  flex: 1;
  padding: 0.5rem 0 1.5rem 0;
  border-bottom: 0.6rem #eee solid;
}
</style>