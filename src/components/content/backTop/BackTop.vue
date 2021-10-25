<!--
 * @Author: your name
 * @Date: 2021-10-24 17:20:41
 * @LastEditTime: 2021-10-24 18:26:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\components\content\backTop\BackTop.vue
-->
<template>
  <div class="back-top">
      <img src="@/assets/img/upTop.png" class="img-up">
  </div>
</template>

<script>
export default {

}
</script>

<style>
.img-up{
  width: 30px;
  height: 30px;
}
.back-top{
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 60px;
  right: 5px;
  padding: 5px;
  border-radius: 50%;
  background-color: #fff;
  /* border: 1px solid #eee; */
  box-shadow: 0px 0px 3px rgba(0,0,0,.3);
}
</style>