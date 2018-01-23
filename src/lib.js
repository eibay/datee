import * as C from './constants'
import * as $ from './variables'

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

export function daysInDaysCounter() {
  let daysInMonth = C.MONTH_MAP[getStartDate(1)]
  let difference = daysInMonth - $.getStartDate(0)
  let days = 0
  days = $.getEndDate(0) + difference
  return days
}

export function daysInMonthsCounter(start, end) {
  let total = 0
  C.MONTH_MAP.map((days, index) => {
    if (index >= start && index < end) {
      total += days
    }
  })
  return total
}