<!--
 * @Author: your name
 * @Date: 2021-10-26 23:03:57
 * @LastEditTime: 2021-10-30 20:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailNavBar.vue
-->
<template>
  <div id="DetailNavDetail">
    <nav-bar>
      <template #left >
        <img src="@/assets/img/left.png" alt="" class="leftback" @click="back">
      </template>
      <template #center class="center">
        <div v-for="(item,index) in titles" :key="index" @click="titleClick(index)" :class="{active:currentIndex === index}">{{item}}</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex : 0,
      TopYs:[]
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index);
    },
    back(){
      this.$router.go(-1)
    }
  },
  components:{
    NavBar
  }

}
</script>

<style>
#DetailNavDetail{
  width: 100%;
  background-color: #fff;
}
.leftback{
  width: 30px;
  margin-top: 4px;
}
.center{
  display: flex;
  flex: 1;
  justify-content: space-around;
}
.center-item{
  flex: 1;
}
.active{
  color: blue
}
</style>