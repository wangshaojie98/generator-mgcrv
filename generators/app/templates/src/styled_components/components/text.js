import styled from 'styled-components'
import { styleMapParser } from '../parsers'

/**
 * {一级标题}样式组件
 *
 */
const H1 = styled.h1`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  font-family: inherit;
  margin-bottom: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {二级标题}样式组件
 *
 */
const H2 = styled.h2`
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  font-family: inherit;
  margin: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {三级标题}样式组件
 *
 */
const H3 = styled.h3`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  font-family: inherit;
  margin: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {正文段落}样式组件
 *
 */
const Paragraph = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-family: inherit;
  margin-bottom: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {格式化段落}样式组件
 *
 */
const Pre = styled.pre`
  font-size: 14px;
  line-height: 14px;
  font-family: inherit;
  margin-bottom: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {注释}样式组件
 *
 */
const Comment = styled.p`
  font-size: 13px;
  line-height: 13px;
  font-family: inherit;
  margin-bottom: 0;
  ${props => styleMapParser({ styledProps: props })}
`

/**
 * {标签}样式组件
 *
 */
const Label = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-family: inherit;
  margin-bottom: 0;
  ${props => styleMapParser({ styledProps: props })}
`

export default {
  H1,
  H2,
  H3,
  Paragraph,
  Pre,
  Comment,
  Label
}
