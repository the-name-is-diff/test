<!--
 * @Author: your name
 * @Date: 2021-10-31 19:39:28
 * @LastEditTime: 2021-11-01 19:50:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CartListItem.vue
-->
<template>
  <div class="CartListItem">
    <div class="CheckButton">
      <check-button  @click.native="btnClick" :value="product.checked"></check-button>
    </div>
    <div class="images">
      <img :src="product.images" alt="">
    </div>
    <div class="detailedInfo">
      <div class="title">
        {{product.title}}
      </div>
      <div class="desc1">
        {{product.title}}
      </div>
      <div class="bottom-info">
        <div class="price">
          ￥{{product.price}}
        </div>
        <div class="count">
          x{{product.count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
export default {
  data(){
    return {
    }
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods:{
    btnClick(){
      this.product.checked = !this.product.checked;
    }
  },
  components:{
    CheckButton
  }
}
</script>

<style scoped>
.CartListItem{
  display: flex;
  margin: 5px;
  border: 1px solid #eee;
}
.CheckButton{
  display: flex;
  align-items: center;
  margin: 3px;
}
.images{
  width: 80px;
  border-radius: 5px;
  overflow: hidden;
}
.images img{
  width: 100%;
  height: 100%;
}
.detailedInfo{
  width: 250px;
  margin: 5px;
  display: flex;
  flex-direction: column;
}
.title{
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin: 0px 0 15px;
}
.desc1{
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-indent: 20px;
  overflow: hidden;
}
.bottom-info{
  width: 100%;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}
</style>