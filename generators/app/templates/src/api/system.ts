import Request from './index'
/**
 * 登录相关
 */

const BASE_URL = '/neptune/system'

export const getValidateId = async () => {
  return Request.get<{ validate_id: string }>(`${BASE_URL}/validate_id`, { responseType: 'json' })
}

export const getValidateCodeImg = async () => {
  return Request.get(`${BASE_URL}/validate_pic`, { responseType: 'blob' })
}
