import { Component, CSSProperties, HTMLAttributes, ReactNode } from 'react'

export { default as AbsoluteBox } from './components/absolute_box'
export { default as Box } from './components/box'
export { default as FixedBox } from './components/fixed_box'
export { default as FlexBox } from './components/flex_box'
export { default as ImageIcon } from './components/image_icon'
export { default as LabelButton } from './components/label_button'
export { default as Text } from './components/text'

/**
 * 样式组件基础参数
 *
 */
interface BaseStyledComponentProps {
  className?: string
  children?: ReactNode
  scopedStyle?: { [selector: string]: CSSProperties }
}

/**
 * 样式组件参数
 *
 */
export type StyledProps<Props = {}> = Props &
  HTMLAttributes<any> &
  BaseStyledComponentProps &
  CSSProperties

/**
 * 样式组件基础类
 *
 */
export default class StyledComponentBase<Props = {}> extends Component<StyledProps<Props>> {}

/**
 * 样式映射解析器参数
 *
 */
export interface StyleMapParserParams {
  /** 样式组件代理通用样式 */
  styledProps: CSSProperties
  /** 有样式组件内部自定义的样式 */
  customStyledProps?: CSSProperties
  /** 需要被额外指定important的样式key数组 */
  importantStyleKeys?: string[]
}
