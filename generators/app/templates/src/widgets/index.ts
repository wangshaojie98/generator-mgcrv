export function before(beforeFn: string) {
  return (target: any, name: string, descriptor: any) => {
    const originFn = descriptor.value

    if (typeof originFn === 'function') {
      descriptor.value = function (...args: any) {
        const fn = this[beforeFn]
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (fn.apply(this, args)) {
          return originFn.apply(this, args)
        }
      }

      return descriptor
    }
  }
}

export { default as request } from './request'
