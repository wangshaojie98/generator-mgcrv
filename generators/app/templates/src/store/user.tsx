import { makeAutoObservable, runInAction } from 'mobx'
import _ from 'lodash'
import {
  getUserInfoFromCookie,
  type UserInfo,
  loginFromPassword,
  loginFromToken
} from '@/api/login'
import { EXAM_LEVELS } from '@/constants'

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

  async loginFromPassword(args: { phone: string; password: string }) {
    console.log('args: ', args)
    const res = await loginFromPassword(args)

    if (args.phone && args.password) {
      this.setUser(res as any)

      console.log(this.userInfo)
    }
  }

  async loginFromToken(args: { token: string }) {
    const res = await loginFromToken(args)

    runInAction(() => {
      if (res?.user?.user_id) {
        this.setUser(res.user)
      }
    })
  }

  getExamLevels() {
    let res: [] | { label: string; value: string }[] = EXAM_LEVELS
    if (this.userInfo) {
      const {
        job: { role },
        level
      } = this.userInfo

      if (role === 'user') {
        res = res.filter(examLevel => level.includes(examLevel))
      }
    }
    return res
  }
}

export default new User()
