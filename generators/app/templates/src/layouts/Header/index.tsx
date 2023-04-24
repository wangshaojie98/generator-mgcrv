import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Box, FlexBox } from '@/styled_components/base'
import styled from 'styled-components'
import Routes from '@/router'
import { SvgIcon } from '@/components'
import UserStore from '@/store/user'
import UserPNG from '/assets/images/user.png'

import { type SVGName } from '@/components/SvgIcon'
type NavList = {
  list: {
    path: string
    icon: string
    title: string
    id: string
  }[]
}
const Wrap = styled.div`
  height: 100%;
  color: #fff;
  font-size: 14px;
  .header__nav__item {
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__nav__item--active {
    background-color: rgb(252 252 254 / 15%);
    height: 100%;
  }
`

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
    <Wrap>
      <FlexBox
        background={`linear-gradient(to right, #4098FF, #386BFF)`}
        style={{ height: 48 }}
        className="header__nav"
      >
        <FlexBox flex={'0 0 260px'} marginRight="16px">
          <span>这是一个标题</span>
        </FlexBox>
        <Box flex={'1 1 500px'} height={'100%'}>
          <NavList list={navRoutes} />
        </Box>
        <FlexBox flex={'0 0 auto'} marginRight={`24px`}>
          <img src={UserPNG} alt="user" width={24} height={24} style={{ marginRight: '4px' }} />
          <span>{UserStore.userInfo?.name}</span>
        </FlexBox>
      </FlexBox>
    </Wrap>
  )
}

export default observer(Header)
