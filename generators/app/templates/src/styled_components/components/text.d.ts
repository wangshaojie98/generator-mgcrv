import StyledComponentBase from '../base'

/**
 * {文字}样式组件
 *
 */
export default class Text extends StyledComponentBase {
  /**
   * {一级标题}样式组件
   *
   */
  static H1: typeof StyledComponentBase

  /**
   * {二级标题}样式组件
   *
   */
  static H2: typeof StyledComponentBase

  /**
   * {三级标题}样式组件
   *
   */
  static H3: typeof StyledComponentBase

  /**
   * {正文段落}样式组件
   *
   */
  static Paragraph: typeof StyledComponentBase

  /**
   * {格式化段落}样式组件
   *
   */
  static Pre: typeof StyledComponentBase

  /**
   * {注释}样式组件
   *
   */
  static Comment: typeof StyledComponentBase

  /**
   * {标签}样式组件
   *
   */
  static Label: typeof StyledComponentBase
}
