import { makeAutoObservable, runInAction } from 'mobx'
import { getValidateId } from '@/api/system'
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
    password: undefined,
    validateCode: undefined
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
    const { validateId } = this
    if (args.phone && args.validateCode && args.password) {
      await userStore.loginFromPassword({
        phone: args.phone,
        validate_code: args.validateCode,
        validate_id: validateId,
        password: args.password
      })

      if (userStore.isLogin) {
        this.navigate?.('/', { state: { from: '/login' } })
      }
    }
  }

  onFormChange(val: FormField) {}

  onReset() {
    this.form.resetFields()
  }

  onValidateCodeChange() {
    this.getValidateId()
  }

  async getValidateId() {
    const res = await getValidateId()

    runInAction(() => {
      this.validateId = res.validate_id
      console.log(this)
    })
  }
}
