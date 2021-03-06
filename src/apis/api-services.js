import Http from 'axios'
import API from './api-path'

Http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'


//设置axios为form-data
// Http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Http.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';


/**
 * encode get 请求对象
 * @param params
 * @returns {string}
 */
const encodeParams = params => {
  const r = '?'
  const p = []
  for (const key in params) {
    p.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  }
  return r + p.join('&')
}

/**
 * 请求类
 */
class ApiService {
  constructor() {
    this.news = {
      getList: this.get.bind(this, API.news.getNewsList),
      getDetail: this.get.bind(this, API.news.getNewsDetail)
    }
    this.getList = this.post.bind(this, API.news.getNewsList)
    this.interceptorsOfReq()
    this.interceptorsOfRes()
  }

  /**
   * get请求
   * @param url
   * @param params
   * @returns {Promise.<TResult>}
   */
  get(url, params) {
    if (params) {
      url += encodeParams(params)
    }
    return Http.get(url).then(res => res.data)
  }

  /**
   * post请求
   * @param url       请求地址
   * @param params    请求参数
   * @param flag      是否需要加签名
   * @returns {Promise.<TResult>}
   */
  post(url, params) {
    if (!params) {
      params = {}
    }
    return Http.post(url, params).then(res => res.data)
  }

  /**
   * 请求拦截器
   */
  interceptorsOfReq() {
    return Http.interceptors.request.use(
      config => {
        // 如果需要token验证, 头部带上token
        // config.headers.token = token
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
  }

  /**
   * 响应拦截器
   */
  interceptorsOfRes() {
    Http.interceptors.response.use(
      response => {
        //          console.log('响应完整数据==', response);
        //          console.log('响应数据==', response.data);
        return response
      },
      function (error) {
        return Promise.reject(error)
      }
    )
  }
}

export default new ApiService()
