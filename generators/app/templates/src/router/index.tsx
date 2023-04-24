import React from 'react'
import { Login } from '@/pages'
import Layout from '@/layouts'
import { loginAuthLoader, rootAuthLoader } from './utils/loaders'
import lazyLoad from './utils/lazyLoad'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    id: 'Login',
    path: '/login',
    loader: loginAuthLoader,
    element: <Login />,
    meta: {
      needAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  // {
  //   id: 'LoginByToken',
  //   path: '/login-by-token',
  //   loader: loginAuthLoader,
  //   element: lazyLoad(React.lazy(async () => import('@/pages/login/loginByToken')))
  // },
  {
    id: 'root',
    path: '/',
    loader: rootAuthLoader,
    children: [
      {
        id: 'redirect to /home',
        path: '',
        element: <Navigate replace to="/home/main" />
      },
      {
        element: <Layout />,
        id: '主页',
        path: 'home',
        handle: {
          title: '主页',
          icon: 'appstore-outlined'
        },
        children: [
          {
            id: '主页-main',
            path: 'main',
            element: lazyLoad(React.lazy(async () => import('@/pages/home')))
          }
        ]
      }
    ]
  },
  {
    id: '/404',
    path: '*',
    element: lazyLoad(React.lazy(async () => import('@/pages/404')))
  }
]

export default routes
