import { redirect } from 'react-router-dom'
import userStore from '@/store/user'

export async function rootAuthLoader() {
  if (!userStore.isLogin) {
    await userStore.getUserFromCookie()
  }

  if (!userStore.isLogin) {
    return redirect('/login')
  }
  return null
}

export async function loginAuthLoader() {
  if (!userStore.isLogin) {
    await userStore.getUserFromCookie()
  }

  return userStore.isLogin ? redirect('/') : null
}
