import { find, indexOf, join, kebabCase, map, mapValues, merge, pickBy } from 'lodash'

/**
 * {样式映射}解析器
 * @typedef {import('./base').StyleMapParserParams} Params
 * @param {Params} params
 * @returns {string}
 *
 */
export const styleMapParser = params => {
  const { styledProps, customStyledProps, importantStyleKeys } = params
  const mergedStyleMap = merge({}, customStyledProps, styledProps)
  const pickedStyleMap = pickBy(mergedStyleMap, i => i !== undefined && i !== null && i !== '')
  return join(
    map(
      pickedStyleMap,
      (value, key) =>
        ` ${kebabCase(key)}: ${value}${indexOf(importantStyleKeys, key) > -1 ? ' !important' : ''};`
    ),
    ''
  )
}

/**
 * 定位值解析器
 * @param {string} place
 * @param {object} positionAttrs
 * @returns {object}
 *
 */
export const positionValueParser = (place, positionAttrs) => {
  const positionAttrConfigs = {
    top: {
      value: positionAttrs.top,
      start: ['top', 'top-left', 'top-right'],
      center: ['center', 'left', 'right'],
      axis: 'y',
      disabled: !!positionAttrs.bottom
    },
    left: {
      value: positionAttrs.left,
      start: ['left', 'top-left', 'bottom-left'],
      center: ['center', 'top', 'bottom'],
      axis: 'x',
      disabled: !!positionAttrs.right
    },
    bottom: {
      value: positionAttrs.bottom,
      start: ['bottom', 'bottom-left', 'bottom-right']
    },
    right: {
      value: positionAttrs.right,
      start: ['right', 'top-right', 'bottom-right']
    }
  }
  const translate = { x: '0', y: '0' }
  const mappedPositionAttrs = mapValues(positionAttrConfigs, config => {
    if (config.value) {
      return config.value
    }
    if (config.disabled) {
      return ''
    }
    if (config.center && config.axis) {
      const center = find(config.center, i => i === place)
      if (center) {
        translate[config.axis] = '-50%'
        return '50%'
      }
    }
    const start = find(config.start, i => i === place)
    if (start) {
      return '0'
    }
    return ''
  })
  const needTranslate = translate.x || translate.y
  mappedPositionAttrs.transform = needTranslate ? `translate(${translate.x}, ${translate.y})` : ''
  return mappedPositionAttrs
}
