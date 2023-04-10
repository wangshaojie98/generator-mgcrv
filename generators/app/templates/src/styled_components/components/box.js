import { forIn } from 'lodash'
import styled from 'styled-components'
import { styleMapParser } from '../parsers'

/**
 * {普通盒模型}样式组件
 *
 */
const Box = styled.div`
  position: relative;
  overflow-anchor: none;
  ${props => {
    const style = styleMapParser({
      customStyledProps: {
        top: props.top || '',
        right: props.right || '',
        bottom: props.bottom || '',
        left: props.left || ''
      },
      styledProps: props
    })

    let scopedStyle = ''
    forIn(props.scopedStyle, (str, key) => {
      const styleStr = styleMapParser({ styledProps: str })
      scopedStyle += `& ${key} {${styleStr}}`
    })

    return `${style};${scopedStyle}`
  }}
`

export default Box
