import axios from "axios";
const _axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})
// 请求拦截
_axios.interceptors.request.use(
  (config)=> config,
  (error)=> Promise.reject(error)
)
// 相应拦截
_axios.interceptors.response.use(
  (config)=> config,
  (error)=> Promise.reject(error)
)
export default _axios