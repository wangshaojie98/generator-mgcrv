import { useMatches, NavLink } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { FlexBox, Box } from '@/styled_components/base'

function Breadcrumbs() {
  const matches = useMatches()
  const filteredMatches = matches.filter(match => match.handle)
  const breadcrumbs = filteredMatches.map((it, idx) => {
    return idx === filteredMatches.length - 1
      ? { title: <Box style={{ color: '#4D5271' }}>{it.id}</Box> }
      : { title: <NavLink to={it.pathname}>{it.id}</NavLink> }
  })

  return (
    <>
      {breadcrumbs.length > 1 ? (
        <FlexBox
          justifyContent={'flex-start'}
          backgroundColor="#FFF"
          height={'31px'}
          paddingLeft={'16px'}
          borderBottom={'1px solid #E9EBF2'}
        >
          <Breadcrumb items={breadcrumbs}></Breadcrumb>
        </FlexBox>
      ) : null}
    </>
  )
}

export default Breadcrumbs
