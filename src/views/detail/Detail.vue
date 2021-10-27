<!--
 * @Author: your name
 * @Date: 2021-10-26 22:09:19
 * @LastEditTime: 2021-10-26 23:33:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
export default {
  data(){
    return {
      iid:null
    }
  },
  methods:{

  },
  components:{
    DetailNavBar
  },
  created(){
    this.iid = this.$route.params.iid
    console.log();
  }
}
</script>

<style>
.leftBack{
  width: 35px;
}
</style>