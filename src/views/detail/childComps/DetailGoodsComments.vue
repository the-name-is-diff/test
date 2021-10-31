<!--
 * @Author: your name
 * @Date: 2021-10-29 20:04:33
 * @LastEditTime: 2021-10-29 22:50:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsComments.vue
-->
<template>
  <div class="DetailGoodsComments" v-if="cGoodsComments">
    <div class="more-wrapper">
      <div class="more">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    </div>
    <div class="header">
      <div class="ulogo">
        <img :src="cGoodsComments.avatar" alt="">
      </div>
      <div class="uname">
        {{cGoodsComments.uname}}
      </div>
      </div>
      <div class="comment-wrapper">
        <div class="comments">
          {{cGoodsComments.content}}
      </div>
      </div>
      <div class="detailed-info-wrapper">
        <div class="detailed-info">
        <div class="date">
          {{cGoodsComments.time|showDate}}
        </div>
        <div class="style">
          {{cGoodsComments.style}}
        </div>
      </div>
      </div>
      <div class="comments-images">
        <div class="item-images" v-for="item in cGoodsComments.images" :key="item.index">
          <img :src="item" alt="">
        </div>
      </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'
export default {
  props:{
    cGoodsComments:null
  },
  filters:{

    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style>
.more-wrapper{
  padding: 20px 0 ;
  margin: 20px auto;
  border-top: 5px solid #eee;
}
.more{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: black;
}
.header{
  display: flex;
  align-items: center;
}
.ulogo{
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px;
}
.ulogo img{
  width: 40px;
}
.uname{
  margin: 0 14px ;
}
.comment-wrapper{
  width: 100%;
  margin: 15px 0 ;
}
.comments{
  width: 90%;
  margin: 0 auto;
}
.detailed-info-wrapper{
  width: 100%;

}
.detailed-info{
  display: flex;
  font-size: 12px;
  width: 90%;
  margin: 0 auto;
}
.style{
  margin: 0 5px;
}
.comments-images{
  display: flex;
  margin: 10px;
  align-items: center;
}
.item-images{
  border: 1px solid black;
  background-color: #fff;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 0 3px;
}
.comments-images img{
  width: 80px;
}
</style>