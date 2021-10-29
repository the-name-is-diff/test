<!--
 * @Author: your name
 * @Date: 2021-10-29 08:57:01
 * @LastEditTime: 2021-10-29 16:53:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsParams.vue
-->
<template>
  <div class="DetailGoodsParams">
    <div class="title">尺码表</div>
    <table class="sizes">
      <tr v-for="item in cGoodsParams.tables" :key="item.index">
        <td v-for="(item1,index) in item" :key="index">
            {{item1}}
        </td>
      </tr>
    </table>
    <div class="title">商品信息</div>
    <table class="goods">
      <tr v-for="(item , index)  in cGoodsParams.set" :key="index">
        <td>
            {{item.key}}
        </td>
        <td>
          {{item.value}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  updated(){
  },
  computed(){
    
  },
  components:{

  },
  methods:{
    getTables(item){
    return item.splice(1)
    
    }
  },
  props:{
    cGoodsParams:null
  }
}
</script>

<style scoped>
.title{
  font-size: 18px;
  color: black;
  margin: 10px;
}
.sizes{
  width: 100%;
}
.sizes tr{
  width: 100%;
  display: block;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  margin: 10px 0;
}
.sizes td{
  width: 80px;
  text-align: center;
}
.goods{
  width: 70%;
  margin: 10px 0;
}
.goods tr{
  width: 100%;
  display: block;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  padding: 10px 0;
}
.goods tr:nth-child(even){
  background-color: rgb(222,225,230);
}
.goods td:nth-child(1){
  width: 80px;
  text-align: center;
}
.goods td:nth-child(2){
  width: calc(100% - 80px);
  text-align: center;
}
</style>