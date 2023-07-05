import axios from "axios";
import store from "@/store";
import {getCookies} from "@/utils/auth";
import {CONSTANT} from "@/utils/constant";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    "Content-Type": 'application/json;charset=utf-8'
  }
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['token'] = getCookies(CONSTANT.TOKEN) // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})


export default service