import router from '../router/router.js'
import axios from 'axios'

console.log(router)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log(router)
    if (err.response.status === 401) {
      localStorage.setItem('lastUrl', router.currentRoute.fullPath)
      setTimeout(() => {
        router.push({
          name: 'about',
          params: { redirect: router.currentRoute.fullPath }
        })
      }, 1000)
      console.log('Requested url rejected: ')
    } else {
      return Promise.reject(err.response)
    }
  }
)
const del = axios.delete
const { get, post, put } = axios

export { get, post, put, del }
