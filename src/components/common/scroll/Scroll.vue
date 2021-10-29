<!--
 * @Author: your name
 * @Date: 2021-10-24 15:13:32
 * @LastEditTime: 2021-10-28 16:45:15
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
    name:"Scroll"
    return {
      scroll:null
    }
  },
  created(){
    console.log("scroll创建啊");
  },
  mounted() {
		  setTimeout(this.__initScroll, 20)
    },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp();
    },
    __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
          click: true,
          observeDOM: true,
          observeImage: true,
          probeType: 3,
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
