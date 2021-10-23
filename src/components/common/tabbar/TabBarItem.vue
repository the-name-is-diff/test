<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) == -1
    }
  },
  props:{
    path:String
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.active{
  color: yellow;
}
.tab-bar-item{
   flex:1
 }
 .tab-bar-item > .iconfont{
   font-size: 23px;
 }

</style>