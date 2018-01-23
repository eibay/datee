import * as C from './constants'
import * as $ from './variables'
import { getLeapYears } from './variables';

export function countLeapYear() {
  leapYearMap()
  let days = findLeapYear($.getStartDate(2), $.getEndDate(2))
  $.setLeapYear(days)
}

export function leapYearMap() {
  for (var i = C.MIN_YEAR; i <= C.MAX_YEAR; i += 4) {
    $.setLeapYears(i)
  }
}

export function findLeapYear(start, end) {
  let days = 0
  let ly = $.getLeapYears()
  for (let i = start; i <= end; i++) {
    ly.filter(year => (i == year) ? days++ : days)
  }
  return (days - leapYearOffset())
}

export function leapYearOffset() {
  let offset = (($.isYearEqual() && $.isMonthEqual())) && isLeapYear($.getStartDate(2)) ? 1 : 0
  return offset
}

export function isLeapYear(year) {
  let ly = $.getLeapYears()
  let status = ly.includes(year) ? true : false
  return status
}