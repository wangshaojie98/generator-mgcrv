import StyledComponentBase from '../base'

/**
 * {按钮}样式组件参数
 */
interface LabelButtonProps {
  /** 按钮大小 */
  size?: 'default' | 'large' | 'small'
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'danger'
  /** 按钮禁用 */
  disabled?: boolean
}

/**
 * {标签按钮}样式组件
 *
 */
export default class LabelButton extends StyledComponentBase<LabelButtonProps> {}
