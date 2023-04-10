import { useMatches, NavLink } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function Breadcrumbs() {
  const matches = useMatches()
  const filteredMatches = matches.filter(match => match.handle)
  const breadcrumbs = filteredMatches.map((it, idx) => {
    return idx === filteredMatches.length - 1
      ? { title: it.id }
      : { title: <NavLink to={it.pathname}>{it.id}</NavLink> }
  })

  return <>{breadcrumbs.length > 1 ? <Breadcrumb items={breadcrumbs}></Breadcrumb> : null}</>
}

export default Breadcrumbs
