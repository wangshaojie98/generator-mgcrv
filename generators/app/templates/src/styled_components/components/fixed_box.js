import { forIn } from 'lodash'
import styled from 'styled-components'
import { positionValueParser, styleMapParser } from '../parsers'

/**
 * {固定定位盒模型}样式组件
 *
 */
const FixedBox = styled.div`
  position: fixed;
  overflow-anchor: none;
  ${props => {
    const style = styleMapParser({
      customStyledProps: positionValueParser(props.place, {
        top: props.top || '',
        right: props.right || '',
        bottom: props.bottom || '',
        left: props.left || ''
      }),
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

export default FixedBox
