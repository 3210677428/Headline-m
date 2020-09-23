/* 用户相关请求模块 */
import request from 'src/utils/request'

/* 登录注册 */
export const login=data=>{
    return request({
        method:'post',
        url:' /app/v1_0/authorizations',
        data
    })
}