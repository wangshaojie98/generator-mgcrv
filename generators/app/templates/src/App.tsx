import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Router from '@/router'

import './index.scss'
import Provider from './store'

function App() {
  return (
    <div id="app">
      <Provider>
        <RouterProvider router={createBrowserRouter(Router)}></RouterProvider>
      </Provider>
    </div>
  )
}

export default App
