import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Router from '@/router'
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd'

import './index.scss'
import Provider from './store'

function App() {
  return (
    <div id="app">
      <ConfigProvider locale={zhCN}>
        <Provider>
          <RouterProvider router={createBrowserRouter(Router)}></RouterProvider>
        </Provider>
      </ConfigProvider>
    </div>
  )
}

export default App
