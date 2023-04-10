import { Outlet } from 'react-router-dom'
import Header from './Header'
import Breadcrumb from './Breadcrumb'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Breadcrumb />
      <div id="pageContainer" className="page-container">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Layout
