// import { CSSProperties } from "react"
export type SVGName = 'appstore-outlined' | 'question-circle'
interface SvgIconProps {
  name: SVGName
  color?: string
  prefix?: string
  style?: React.CSSProperties
}

export default function SvgIcon(props: SvgIconProps) {
  const {
    name,
    prefix = 'icon',
    color = '#333',
    style = { width: '100px', height: '100px', color: '#787878' }
  } = props
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" style={style}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
