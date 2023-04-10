/**
 * 样式化Antd组件库外观模块
 */
import * as antd from 'antd'
import { forIn } from 'lodash'
import styled from 'styled-components'
import { styleMapParser } from './parsers'

/**
 * 组件样式化
 */
const makeStyled = component => styled(component)`
  ${props => {
    let scopedStyle = ''
    forIn(props.scopedStyle, (style, key) => {
      const styleStr = styleMapParser({ styledProps: style })
      scopedStyle += `& ${key} {${styleStr}}`
    })
    return `${styleMapParser({ styledProps: props })};${scopedStyle}`
  }}
`

export const Affix = makeStyled(antd.Affix)
export const Anchor = makeStyled(antd.Anchor)
export const AutoComplete = makeStyled(antd.AutoComplete)
export const Alert = makeStyled(antd.Alert)
export const Avatar = makeStyled(antd.Avatar)
export const BackTop = makeStyled(antd.BackTop)
export const Badge = makeStyled(antd.Badge)
export const Breadcrumb = makeStyled(antd.Breadcrumb)
export const Button = makeStyled(antd.Button)
export const Calendar = makeStyled(antd.Calendar)
export const Card = makeStyled(antd.Card)
export const Collapse = makeStyled(antd.Collapse)
export const Carousel = makeStyled(antd.Carousel)
export const Cascader = makeStyled(antd.Cascader)
export const Checkbox = makeStyled(antd.Checkbox)
export const Col = makeStyled(antd.Col)
export const Comment = makeStyled(antd.Comment)
export const ConfigProvider = makeStyled(antd.ConfigProvider)
export const DatePicker = makeStyled(antd.DatePicker)
export const Divider = makeStyled(antd.Divider)
export const Dropdown = makeStyled(antd.Dropdown)
export const Drawer = makeStyled(antd.Drawer)
export const Empty = makeStyled(antd.Empty)
export const Form = makeStyled(antd.Form)
export const Icon = makeStyled(antd.Icon)
export const Input = makeStyled(antd.Input)
export const InputNumber = makeStyled(antd.InputNumber)
export const Layout = makeStyled(antd.Layout)
export const List = makeStyled(antd.List)
export const LocaleProvider = makeStyled(antd.LocaleProvider)
export const Menu = makeStyled(antd.Menu)
export const Modal = makeStyled(antd.Modal)
export const Statistic = makeStyled(antd.Statistic)
export const PageHeader = makeStyled(antd.PageHeader)
export const Pagination = makeStyled(antd.Pagination)
export const Popconfirm = makeStyled(antd.Popconfirm)
export const Popover = makeStyled(antd.Popover)
export const Progress = makeStyled(antd.Progress)
export const Radio = makeStyled(antd.Radio)
export const Rate = makeStyled(antd.Rate)
export const Row = makeStyled(antd.Row)
export const Select = makeStyled(antd.Select)
export const Skeleton = makeStyled(antd.Skeleton)
export const Slider = makeStyled(antd.Slider)
export const Spin = makeStyled(antd.Spin)
export const Steps = makeStyled(antd.Steps)
export const Switch = makeStyled(antd.Switch)
export const Table = makeStyled(antd.Table)
export const Transfer = makeStyled(antd.Transfer)
export const Tree = makeStyled(antd.Tree)
export const TreeSelect = makeStyled(antd.TreeSelect)
export const Tabs = makeStyled(antd.Tabs)
export const Tag = makeStyled(antd.Tag)
export const TimePicker = makeStyled(antd.TimePicker)
export const Timeline = makeStyled(antd.Timeline)
export const Tooltip = makeStyled(antd.Tooltip)
export const Typography = makeStyled(antd.Typography)
export const Mention = makeStyled(antd.Mention)
export const Upload = makeStyled(antd.Upload)
