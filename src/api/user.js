/* 用户相关请求模块 */
import request from '@/utils/request'

/* 登录注册 */
export const login = data => {
  return request({
    // ' Content-Type': 'application/json',
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}

/* 获取用户频道列表 */
export const getUserChannels=()=>{
  return request({
    method:"GET",
    url:"/app/v1_0/user/channels"
  })
}