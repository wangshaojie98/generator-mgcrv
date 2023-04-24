/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from 'react-router-dom'
import { Box, FlexBox } from '@/styled_components/base'
import Routes from '@/router'
import { SvgIcon } from '@/components'
import { type SVGName } from '@/components/SvgIcon'

type NavList = {
  list: {
    path: string
    icon: string
    title: string
    id: string
  }[]
}

const NavList = (props: NavList) => {
  return (
    <FlexBox justifyContent={'flex-start'} height="100%">
      {props.list.map((it, idx) => (
        <NavLink
          to={`${it.path}`}
          className={({ isActive, isPending }) =>
            isPending
              ? 'header__nav__item'
              : isActive
              ? 'header__nav__item--active header__nav__item'
              : 'header__nav__item'
          }
          key={it.id}
        >
          <FlexBox marginRight={idx !== props.list.length - 1 ? '16px' : ''} width={`112px`}>
            <SvgIcon
              name={it.icon as SVGName}
              style={{ width: 16, height: 16, marginRight: 8 }}
            ></SvgIcon>
            {it.title}
          </FlexBox>
        </NavLink>
      ))}
    </FlexBox>
  )
}

const Header = () => {
  const rootRoute = Routes.find(route => route.id === 'root')
  const navRoutes =
    rootRoute?.children
      ?.filter(child => child.handle)
      .map(child => {
        return {
          ...child,
          path: `${rootRoute.path}${child.path}`,
          icon: child.handle!.icon,
          title: child.handle!.title
        }
      }) ?? []

  return (
    <FlexBox
      background={`linear-gradient(to right, #4098FF, #386BFF)`}
      style={{ height: 48 }}
      className="header__nav"
    >
      <Box flex={'1 1 500px'} height={'100%'}>
        <NavList list={navRoutes} />
      </Box>
      <Box flex={'0 0 auto'}>nav-right</Box>
    </FlexBox>
  )
}

export default Header
