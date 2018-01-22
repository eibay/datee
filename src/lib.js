import * as C from './constants'

export function isBetween(start, end) {
  return ((C.MAX_YEAR >= start[2] && start[2] >= C.MIN_YEAR))
    && ((C.MAX_YEAR >= end[2] && end[2] >= C.MIN_YEAR))
    ? true : false
}

export function formatArray(input) {
  return (input.join().replace(/,/g, ' '))
}

export function dateToInt(date) {
  let numDate = date.map(Number)
  return numDate
}