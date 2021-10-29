/*
 * @Author: your name
 * @Date: 2021-10-27 14:59:03
 * @LastEditTime: 2021-10-28 20:32:25
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
