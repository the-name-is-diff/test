<!--
 * @Author: your name
 * @Date: 2021-11-01 20:06:44
 * @LastEditTime: 2021-11-01 21:39:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CartBottomBar.vue
-->
<template>
  <div class="CartBottomBar">
    <div class="checkModule">
      <check-button class="checkBtn" :value="isSelectAll" @click.native="btnClick"></check-button>
    <div class="Tips">全选</div>
    </div>
    <div class="priceModule">
      <div class="priceTips">合计:</div>
      <div class="price">{{totalPrice}} </div>
    </div>
    <div class="calculate">
      <span>去计算{{totalCount}}</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton.vue'
export default {
  data(){
    return {
      sumPrice:0
    }
  },
  components:{
    CheckButton
  },
  props:{
    CartLength:0
  },
  computed:{
    totalPrice(){
      return '￥'+this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price *item.count;
      },0).toFixed(2)
    },
    totalCount(){
      return '('+this.$store.state.cartList.reduce((preValue,item)=>{
        return preValue + item.count;
      },0) +')'
    },
    isSelectAll(){
      if(this.$store.state.cartList.length === 0){
        return false;
      }
       return !this.$store.state.cartList.find(item=>
        !item.checked
       )
    }
  },
  methods:{
    btnClick(){
      console.log("点击了");
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }
      else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  },
}
</script>

<style>
.CartBottomBar{
  width: 100%;
  background-color: rgb(231,236,239);
  height: 40px;
  position: fixed;
  bottom: 49px;
  display: flex;
  align-items: center;
}
.checkModule{
  display: flex;
  width: 70px;
}
.checkBtn{
  margin: 0 10px;
}
.Tips{
  color:#aaa
}
.priceModule{
  margin: 0 20px;
  display: flex;
  flex: 1;
}
.calculate{
  width: 100px;
  background-color: red;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>