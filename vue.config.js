/*
 * @Author: your name
 * @Date: 2021-10-21 21:49:01
 * @LastEditTime: 2021-10-28 11:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\vue.config.js
 */
const path = require('path');        //引入path模块
function resolve(dir){
    return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@',resolve('./src'))
            .set('assets',resolve('@/assets'))
            .set('components',resolve('./src/components'))
            .set('views',resolve('src/views'))
            .set('common',resolve('src/common'))
            .set('network',resolve('src/network'))
    },
    publicPath:"./",
    css:{
      loaderOptions:{
        less:{
          javascriptEnabled:true,
        }
      }
    }
}
