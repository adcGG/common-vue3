import axios from 'axios';

// 创建一个axios实例
const instance = axios.create({
  // 在此处设置你的请求基础URL等配置
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前做些什么，例如添加token等
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = token;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    const errData = error?.response?.data
    if(errData) {
      if(errData.statusCode === 401) {
        ElMessage.error(errData.message)
      }
    }
    return Promise.reject(error);
  }
);

export default instance;