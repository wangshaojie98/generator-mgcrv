import { Outlet } from 'react-router-dom'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import { Box } from '@/styled_components/base'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Box padding={'16px 16px 16px 16px'} position="static">
        <Breadcrumb />
        <Box backgroundColor={'#FFF'} padding={'16px 16px 16px'} position="static">
          <Outlet></Outlet>
        </Box>
      </Box>
    </div>
  )
}

export default Layout
