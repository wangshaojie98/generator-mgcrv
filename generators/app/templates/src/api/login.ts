import Request from './index'
/**
 * 登录相关
 */

const BASE_URL = '/login'

interface Login {
  phone: string
  code: string
}

interface LoginFromPassword {
  phone: string
  password: string
  validate_code: string
  validate_id: string
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

export const loginFromPhoneCode = async (params: Login) => {
  return Request.post(`${BASE_URL}/user_login`)
}

export const loginFromPassword = async (params: LoginFromPassword) => {
  return Request.post(`${BASE_URL}/login_password`, params)
}

export const getUserInfoFromCookie = async () => {
  return Request.get<UserInfo>(`/user/user_info_by_cookie`)
}
