interface SvgIconProps {
  name: string
  color?: string
  prefix?: string
  style?: Record<string, any>
}

export default function SvgIcon(props: SvgIconProps) {
  const {
    name,
    prefix = 'icon',
    color = '#333',
    style = { width: '100px', height: '100px' }
  } = props
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true" style={style}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
