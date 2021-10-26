<!--
 * @Author: your name
 * @Date: 2021-10-23 18:00:25
 * @LastEditTime: 2021-10-26 18:33:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item , index) in titles" :key="index"
    :class="{active: index === currentIndex}" @click="classActive(index)">
        <span>{{item}} </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex : 0
    }
  },
  methods:{
    classActive(index){
      this.currentIndex = index;
      this.$emit('tabclick',index)
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  padding: 5px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
.active span{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>