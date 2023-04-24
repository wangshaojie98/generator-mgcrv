import Request from './index'
import Cookies from 'js-cookie'
/**
 * 登录相关
 */

const BASE_URL = '/login'

interface LoginFromPhoneCodeParams {
  phone: string
  code: string
}

interface LoginFromPassword {
  phone: string
  password: string
}

export interface UserInfo {
  _id: string
  name: string
  phone: string
  job_id: string
  level: any[]
  subject: any[]
  school: any[]
  status: string
  job: Job
  shortcut: any[]
  ctime: string
  mtime: string
  grade_id: any[]
  area_level: boolean
  user_role: any
  school_classes: any
  user_id: string
}

export interface Job {
  _id: string
  role: string
  name: string
  desc: string
  perm: string[]
  ctime: string
  mtime: string
  area_level: boolean
  creator: string
}

export interface LoginRes {
  success: boolean
  message: string
  user: UserInfo
}
export const loginFromPhoneCode = async (params: LoginFromPhoneCodeParams) => {
  console.log('params: ', params)
  return Request.post(`${BASE_URL}/user_login`)
}

export const loginFromPassword = async (params: LoginFromPassword) => {
  console.log('params: ', params)
  const mock = { user_id: 'admin' }
  Cookies.set('token', JSON.stringify(mock))

  return mock
}

export const getUserInfoFromCookie = async () => {
  // return Request.get<UserInfo>(`/user/user_info_by_cookie`)

  const json = Cookies.get('token')
  if (json) {
    return JSON.parse(json)
  }

  return null
}

export const loginFromToken = async (params: { token: string }) => {
  return Request.post<LoginRes>(`${BASE_URL}/user_login_from_token`, params)
}
