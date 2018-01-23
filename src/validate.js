import * as $ from './variables'
import * as C from './constants'

export function validateInput() {
  return ($.getIsYearValid()) ? true : (`Error 1: Input out of range. ${C.MIN_YEAR} - ${C.MAX_YEAR}`)
}