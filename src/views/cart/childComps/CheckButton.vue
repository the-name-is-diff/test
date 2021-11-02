<!--
 * @Author: your name
 * @Date: 2021-10-31 20:50:40
 * @LastEditTime: 2021-11-01 19:45:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CheckButton.vue
-->
<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': value}">
        <i class="iconfont">&#xeaf1;</i>
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		  value: {
		    type: Boolean,
        default: true
      }
    },
    data: function () {
		  return {
      }
    },
    methods: {
      selectItem() {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value(newValue) {
        this.checked = newValue;
      }
    }
	}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* Project id 2871323 */
  src: url('//at.alicdn.com/t/font_2871323_p8ecitmau1o.woff2?t=1635754964443') format('woff2'),
       url('//at.alicdn.com/t/font_2871323_p8ecitmau1o.woff?t=1635754964443') format('woff'),
       url('//at.alicdn.com/t/font_2871323_p8ecitmau1o.ttf?t=1635754964443') format('truetype');
}
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
    color: #fff;
  }
</style>