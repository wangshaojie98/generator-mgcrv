import StyledComponentBase from '../base'

/**
 * 摆放位置
 */
type Place =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-left'

/**
 * {带有摆放位置的定位}样式组件参数
 *
 */
export interface PlacedPositionProps {
  /** 上部距离 */
  top?: string
  /** 右部距离 */
  right?: string
  /** 下部距离 */
  bottom?: string
  /** 左部距离 */
  left?: string
  /** 摆放位置，默认'center' */
  place?: Place
}

/**
 * {绝对定位盒模型}样式组件
 *
 */
export default class AbsoluteBox extends StyledComponentBase<PlacedPositionProps> {}
