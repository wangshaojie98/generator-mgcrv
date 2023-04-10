import { makeAutoObservable } from 'mobx'

enum Types {
  'Normal' = 'Normal',
  'Dicount_8' = 'Dicount_8',
  'Rebate_300_100' = 'Rebate_300_100'
}

type DiscountTypes = Types.Normal | Types.Dicount_8 | Types.Rebate_300_100

export type FormField = {
  price: number
  amount: number
  type: DiscountTypes
}

const options = [
  { value: Types.Normal, label: '正常收费' },
  { value: Types.Dicount_8, label: '打八折' },
  { value: Types.Rebate_300_100, label: '满300返100' }
]

class Model1 {
  total = 0
  records: string[] = []
  initialValues = {
    price: 1000,
    amount: 1,
    type: Types.Dicount_8
  }

  form: any = undefined
  options = options

  constructor({ form }: { form: any }) {
    this.form = form
    makeAutoObservable(this, {}, { autoBind: true })
  }

  onFinish(args: FormField) {
    let totalPrice = 0
    switch (args.type) {
      case Types.Normal:
        totalPrice = args.amount * args.price
        break
      case Types.Dicount_8:
        totalPrice = args.amount * args.price * 0.8
        break
      case Types.Rebate_300_100:
        totalPrice = args.amount * args.price - Math.floor((args.amount * args.price) / 300) * 100
        break
      default:
        totalPrice = args.amount * args.price
    }

    this.total = this.total + totalPrice
    this.records.push(`单价：${args.price}，数量：${args.amount}，合计：${totalPrice}`)
  }

  onFormChange(val: FormField) {}

  onReset() {
    this.form.resetFields()
    this.records = []
    this.total = 0
  }
}
export default Model1

class CashNormal {
  acceptCash(money: number) {
    return money
  }
}

class CashRebate {
  moneyRebate = 1
  constructor(moneyRebate: number) {
    this.moneyRebate = moneyRebate
  }

  acceptCash(money: number) {
    return money * this.moneyRebate
  }
}

class CashReturn {
  moneyCondition = 0
  moneyReturn = 0
  constructor(moneyCodition: number, moneyReturn: number) {
    this.moneyCondition = moneyCodition
    this.moneyReturn = moneyReturn
  }

  acceptCash(money: number) {
    const res = money
    if (money > this.moneyCondition) {
      return money - Math.floor(money / this.moneyCondition) * this.moneyReturn
    }

    return res
  }
}

// 现金收费工厂
class CashFactory {
  static createCashAccept(type: DiscountTypes) {
    let aCash = null
    switch (type) {
      case Types.Normal:
        aCash = new CashNormal()
        break
      case Types.Rebate_300_100:
        aCash = new CashReturn(300, 100)
        break
      case Types.Dicount_8:
        aCash = new CashRebate(0.8)
        break
      default:
        aCash = new CashNormal()
    }

    return aCash
  }
}

export class Model2 {
  total = 0
  records: string[] = []
  initialValues = {
    price: 1000,
    amount: 1,
    type: Types.Dicount_8
  }

  form: any = undefined
  options = options

  constructor({ form }: { form: any }) {
    this.form = form
    makeAutoObservable(this, {}, { autoBind: true })
  }

  onFinish(args: FormField) {
    const cs = CashFactory.createCashAccept(args.type)
    const totalPrice = cs.acceptCash(args.price * args.amount)

    this.total += totalPrice
    this.records.push(`单价：${args.price}，数量：${args.amount}，合计：${totalPrice}`)
  }

  onFormChange(val: FormField) {}

  onReset() {
    this.form.resetFields()
    this.records = []
    this.total = 0
  }
}

type CashTypes = CashNormal | CashRebate | CashReturn
class CashContext {
  cs: CashTypes
  constructor(type: DiscountTypes) {
    let aCash = null
    switch (type) {
      case Types.Normal:
        aCash = new CashNormal()
        break
      case Types.Rebate_300_100:
        aCash = new CashReturn(300, 100)
        break
      case Types.Dicount_8:
        aCash = new CashRebate(0.8)
        break
      default:
        aCash = new CashNormal()
    }

    this.cs = aCash
  }

  getResult(money: number) {
    return this.cs.acceptCash(money)
  }
}

export class Model3 {
  total = 0
  records: string[] = []
  initialValues = {
    price: 1000,
    amount: 1,
    type: Types.Dicount_8
  }

  form: any = undefined
  options = options

  constructor({ form }: { form: any }) {
    this.form = form
    makeAutoObservable(this, {}, { autoBind: true })
  }

  onFinish(args: FormField) {
    const cs = new CashContext(args.type)
    const totalPrice = cs.getResult(args.price * args.amount)

    this.total += totalPrice
    this.records.push(`单价：${args.price}，数量：${args.amount}，合计：${totalPrice}`)
  }

  onFormChange(val: FormField) {}

  onReset() {
    this.form.resetFields()
    this.records = []
    this.total = 0
  }
}
