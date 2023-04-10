import StyledComponentBase from '../base'

/**
 * 横向布局
 */
type HorizontalLayout = 'center' | 'left' | 'right' | 'space-between' | 'space-around'

/**
 * 纵向布局
 */
type VerticalLayout = 'center' | 'top' | 'bottom'

/**
 * {弹性盒}样式组件参数类
 */
interface FlexProps {
  /** 横向布局，默认'center' */
  horizontal?: HorizontalLayout
  /** 纵向布局，默认'center' */
  vertical?: VerticalLayout
  /** 排列，默认'row' */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /** 子元素无缝衔接 */
  noSpace?: boolean
  /** 锁定大小 */
  freezeSize?: boolean | string
  /** 是否折行 */
  wrap?: boolean
}

/**
 * {弹性盒模型}样式组件
 *
 */
export default class FlexBox extends StyledComponentBase<FlexProps> {}
