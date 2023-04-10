import styled from 'styled-components'
import { styleMapParser } from '../parsers'

/**
 * {标签按钮}样式组件
 *
 */
const LabelButton = styled.a`
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? 'none' : '')};
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  overflow: hidden;
  transition: all 0.15s linear;
  ${props => {
    const size = props.size || 'default'
    const type = props.type || 'primary'

    const customStyle = styleMapParser({
      styledProps: props,
      customStyledProps: {
        fontSize: {
          default: '14px',
          large: '16px',
          small: '12px'
        }[size],
        color: {
          default: '#555',
          primary: '#386BFF',
          danger: '#F5222D'
        }[type]
      }
    })

    const hoverStyle = styleMapParser({
      customStyledProps: {
        opacity: 0.8
      }
    })

    return `${customStyle}&:hover{${hoverStyle}}`
  }}

  /* 禁用双击选择文本 */
    -moz-user-select:none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
`

export default LabelButton
