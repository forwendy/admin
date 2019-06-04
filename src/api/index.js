import Vue from 'vue' // 引入vue
import axios from 'axios'// 引入axios
import {Loading, Message, Notification} from 'element-ui'

axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
// 允许跨域
axios.defaults.crossDomain = true
// 让ajax携带cookie
axios.defaults.withCredentials = false
// 请求头处理
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求超时时间
axios.defaults.timeout = 10000

// request拦截器
axios.interceptors.request.use(
  config => {
    // 对请求参数的处理
    const data = {
      data: {},
    }

    console.log(config)
    if(config.method === 'get'){
      if(config.params) data.data = config.params
      config.params = data
    }else{
      if(config.data) data.data = config.data
      config.data = data
    }
    return config
  },
  error =>{
    console.log('Request Error:', error) // for debug
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // 统一处理错误数据
    // todo 不处理特殊接口 this.qiniuTokenUrl
    if(response.data.code != 200){
      Notification.error({title: '错误', message: response.data.msg})
    }
    return response
  },
  error =>{
    console.log('Response Error:', error) // for debug
    return Promise.reject(error)
  }
)

// 返回在vue中的调用接口
export default axios
