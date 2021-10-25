/*
 * @Author: your name
 * @Date: 2021-10-22 21:02:22
 * @LastEditTime: 2021-10-24 21:05:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \VUE\project\supermall\src\network\request.js
 */
import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config; 
    
  },
  err=>{
    console.log(err);
  }
  )
  return instance(config);
}