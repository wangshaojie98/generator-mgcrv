import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import userStore from '@/store/user'

const LoginByToken = () => {
  const navigate = useNavigate()

  const handleLogin = async () => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')

    if (token) {
      await userStore.loginFromToken({ token })
    }

    if (userStore.isLogin) {
      navigate('/', { replace: true })
    }
  }

  useEffect(() => {
    handleLogin()
  }, [])

  return <h1>权限已过期，请重新获取</h1>
}

export default observer(LoginByToken)
