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
  {
    id: 'root',
    path: '/',
    loader: rootAuthLoader,
    element: <Layout />,
    children: [
      {
        id: 'redirect to /home',
        path: '',
        element: <Navigate replace to="/quick-report/list" />
      },
      {
        // NOTE 这一层可以不做渲染
        id: '快捷报告',
        path: 'quick-report',
        handle: {
          title: '快捷报告',
          icon: 'appstore-outlined'
        },
        children: [
          {
            id: 'redirect to /quick-report/list',
            path: '',
            element: <Navigate replace to="/quick-report/list" />
          },
          {
            id: '快捷报告列表',
            path: 'list',
            element: lazyLoad(React.lazy(async () => import('@/pages/quickReport/list')))
          },
          {
            id: '生成报告流程',
            path: 'create',
            element: lazyLoad(React.lazy(async () => import('@/pages/quickReport/create'))),
            handle: {
              title: '生成报告流程'
            }
          }
        ]
      },
      {
        id: 'Page2',
        path: 'page2',
        element: lazyLoad(React.lazy(async () => import('@/pages/page2'))),
        handle: {
          title: 'Page2',
          icon: 'question-circle'
        }
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
