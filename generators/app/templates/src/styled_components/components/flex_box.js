import { forIn } from 'lodash'
import styled from 'styled-components'
import { styleMapParser } from '../parsers'

/**
 * {弹性盒模型}样式组件
 *
 */
const FlexBox = styled.div`
  position: relative;
  display: flex;
  overflow-anchor: none;
  ${props => {
    const { direction, horizontal, vertical, wrap, noSpace, freezeSize } = props
    let _freezeSize = ''
    if (typeof freezeSize === 'boolean') {
      _freezeSize = freezeSize ? '100%' : ''
    } else if (typeof freezeSize === 'string') {
      _freezeSize = freezeSize
    }
    const style =
      styleMapParser({
        customStyledProps: {
          flexDirection: direction || 'row',
          justifyContent: {
            center: 'center',
            left: 'flex-start',
            right: 'flex-end',
            'space-between': 'space-between',
            'space-around': 'space-around'
          }[horizontal || 'center'],
          alignItems: {
            center: 'center',
            top: 'flex-start',
            bottom: 'flex-end'
          }[vertical || 'center'],
          flexWrap: wrap ? 'wrap' : 'nowrap',
          flexBasis: _freezeSize,
          flexShrink: freezeSize ? '1' : ''
        },
        styledProps: props
      }) + (noSpace ? '&>*{flex:1;text-align:center}' : '')

    let scopedStyle = ''
    forIn(props.scopedStyle, (str, key) => {
      const styleStr = styleMapParser({ styledProps: str })
      scopedStyle += `& ${key} {${styleStr}}`
    })

    return `${style};${scopedStyle}`
  }}
`

export default FlexBox
