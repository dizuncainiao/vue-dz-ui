/**
 * 判断是否为数值类型
 * @param val
 * @returns {boolean|boolean}
 */
export function isNumber (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * 返回有效的数值
 * @param n
 * @returns {number}
 */
export function getNumber (n) {
  return typeof parseFloat(n) === 'number' && !!parseFloat(n) ? parseFloat(n) : 0
}

/**
 * 判断是否为 空字符串
 * @param str
 * @returns {boolean|boolean}
 */
export function isEmptyStr (str) {
  return typeof str === 'string' && !str.length
}
