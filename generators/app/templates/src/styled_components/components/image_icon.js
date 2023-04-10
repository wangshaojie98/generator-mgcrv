/* eslint-disable camelcase */
import styled from 'styled-components'
import { styleMapParser } from '../parsers'
import prev from '../images/prev.png'
import prev_disabled from '../images/prev_disabled.png'
import next from '../images/next.png'
import next_disabled from '../images/next_disabled.png'
import set from '../images/set.png'
import star from '../images/star.png'
import success from '../images/success.png'
import zoom_in from '../images/zoom_in.png'
import zoom_out from '../images/zoom_out.png'
import back from '../images/back.png'
import tag from '../images/tag.png'

/**
 * 图标文件映射
 */
const iconMap = {
  prev,
  prev_disabled,
  next,
  next_disabled,
  set,
  star,
  success,
  zoom_in,
  zoom_out,
  back,
  tag
}

/**
 * {图片图标}样式组件
 *
 */
const ImageIcon = styled.div`
  display: inline-block;
  ${props => {
    const { size, value } = props
    return styleMapParser({
      styledProps: props,
      customStyledProps: {
        width: size || '24px',
        height: size || '24px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundImage: `url('${iconMap[value]}')`
      }
    })
  }}
`

export default ImageIcon
