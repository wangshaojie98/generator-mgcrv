import { makeAutoObservable, runInAction } from 'mobx'
import { getUserInfoFromCookie, type UserInfo, loginFromPassword } from '@/api/login'
import _ from 'lodash'

class User {
  userInfo: UserInfo | null = null
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  getUser() {
    return this.userInfo
  }

  setUser(userInfo: UserInfo) {
    this.userInfo = userInfo
  }

  /** 因为cookie无法通过js获取，则直接发送请求获取userInfo */
  async getUserFromCookie() {
    try {
      const userInfo = await getUserInfoFromCookie()

      runInAction(() => {
        if (userInfo?.user_id) {
          this.userInfo = userInfo
        }
      })
    } catch (error) {}

    return this.userInfo
  }

  get isLogin() {
    return !_.isEmpty(this.userInfo?.user_id)
  }

  async loginFromPassword(args: {
    phone: string
    password: string
    validate_code: string
    validate_id: string
  }) {
    const res = await loginFromPassword(args)

    runInAction(() => {
      if (res?.user?.user_id) {
        this.setUser(res.user)
      }
    })
  }
}

export default new User()
/**
 * 1.路由权限控制
 *  a. 用一个store存储是否登录的user，
 *    getUser
 *    setUser
 *    getUserFromToken
 *    setUserFromToken
 *    logout，重置user和token
 *  b. 每次路由判断是否有user，如果有则放行
 *     如果没有则根据cookie的token是否存在，
 *        如果存在token，则使用token去获取user,
 *        如果不存在则跳转到/login,如果
 */
