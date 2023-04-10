import StyledComponentBase from '../base'

/**
 * {图片图标}样式组件参数
 */
interface ImageIconProps {
  /** 图标大小 */
  size?: string
  /** 图标名称 */
  value:
    | 'prev'
    | 'prev_disabled'
    | 'next'
    | 'next_disabled'
    | 'set'
    | 'star'
    | 'success'
    | 'zoom_in'
    | 'zoom_out'
    | 'back'
    | 'tag'
}

/**
 * {图片图标}样式组件
 *
 */
export default class ImageIcon extends StyledComponentBase<ImageIconProps> {}
