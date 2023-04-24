import { makeAutoObservable } from 'mobx'
import { type NavigateFunction } from 'react-router-dom'
import { type FormInstance } from 'antd'
import userStore from '@/store/user'

export type FormField = {
  phone: undefined | string
  password: undefined | string
  validateCode: undefined | string
}

type ModelConstructorProps = {
  form: FormInstance
  navigate: NavigateFunction
}
export class Model {
  initialValues = {
    phone: undefined,
    password: undefined
  }

  form: any = undefined
  validateId = ''
  validateCodeImgUrl = ''
  navigate: NavigateFunction | null = null
  constructor(props: ModelConstructorProps) {
    this.form = props.form
    this.navigate = props.navigate
    makeAutoObservable(this, {}, { autoBind: true })
  }

  async onFinish(args: FormField) {
    console.log('args: ', args)
    if (args.phone && args.password) {
      await userStore.loginFromPassword({
        phone: args.phone,
        password: args.password
      })

      if (userStore.isLogin) {
        this.navigate?.('/', { replace: true })
      }
    }
  }

  onFormChange(val: FormField) {}

  onReset() {
    this.form.resetFields()
  }
}
