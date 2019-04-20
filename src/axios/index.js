import axios from 'axios'
import router from '../router'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
    // if (localStorage.getItem('access-token')) {
      // 让每个请求携带自定义token 请根据实际情况自行修改
      config.url = config.url + '?access-token=oXyX6QE-muQQqwylUApFug4crg-NbcZa'
      //  + localStorage.getItem('access-token')
    // }
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        switch(error.response.status) {
            case 401:
                break
            case 500:
                break
            default:
        }
        return Promise.reject(error.response)
    }
)

export default service
