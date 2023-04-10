import StyledComponentBase from '../base'

/**
 * {定位}样式组件参数
 */
interface PositionProps {
  /** 上部距离 */
  top?: string
  /** 右部距离 */
  right?: string
  /** 下部距离 */
  bottom?: string
  /** 左部距离 */
  left?: string
}

/**
 * {普通盒模型}样式组件
 *
 */
export default class Box extends StyledComponentBase<PositionProps> {}
