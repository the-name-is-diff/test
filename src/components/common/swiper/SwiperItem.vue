<!--
 * @Author: your name
 * @Date: 2021-10-23 09:44:31
 * @LastEditTime: 2021-10-28 17:38:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\swiper\SwiperItem.vue
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
  }
</style>