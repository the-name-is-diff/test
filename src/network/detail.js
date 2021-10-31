/*
 * @Author: your name
 * @Date: 2021-10-27 14:59:03
 * @LastEditTime: 2021-10-29 21:43:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\detail.js
 */
import { request } from "./request";
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend',
  })
}
export class Goods{
  constructor(iteminfo,columns,services,color){
    this.title = iteminfo.title;
    this.highprice = iteminfo.highPrice;
    this.lowprice = iteminfo.highNowPrice;
    this.columns = columns
    this.services = services
    this.color = color
  }
}

export class Shop{
  constructor(shopInfo,){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
  }
}

export class GoodsParams{
  constructor(itemParams){
    
    this.key = itemParams.info.key;
    this.tables = itemParams.rule.tables[0]
    this.set = itemParams.info.set
  }
}
export class GoodsComments{
  constructor(rate){
    this.avatar = rate.list[0].user.avatar;
    this.uname = rate.list[0].user.uname;
    this.content = rate.list[0].content;
    this.time = rate.list[0].created;
    this.style = rate.list[0].style;
    this.images = rate.list[0].images;  
  }
}