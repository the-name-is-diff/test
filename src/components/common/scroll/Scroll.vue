<!--
 * @Author: your name
 * @Date: 2021-10-24 15:13:32
 * @LastEditTime: 2021-10-27 21:50:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\common\scroll\Scroll.vue
-->
<template>
  <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
  data(){
    return {
      scroll:null
    }
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp();
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
    click: true,
          observeDOM: true,
          observeImage: true,
          // 监听
          probeType: 3,
          // 上拉加载更多
          pullUpLoad: true
  })
  this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
  })
  this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
    
  })
  },
}
</script>

<style>

</style>
