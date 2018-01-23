import * as Input from './input'
import * as $ from './variables'
import * as Lib from './lib'
import * as C from './constants'

export function setInputDate(start, end) {
  if (end[2] > start[2]) {
    setDatesInput(start, end)
  } else if (end[2] == start[2]) {
    isMonthValid(start, end)
  } else {
    setDatesInputReverse(start, end)
  }
}

export function isMonthValid(start, end) {
  if (end[1] > start[1]) {
    setDatesInput(start, end)
  } else if (end[1] == start[1]) {
    isDayValid(start, end)
  } else {
    setDatesInputReverse(start, end)
  }
}

export function isDayValid(start, end) {
  if (end[0] > start[0]) {
    setDatesInput(start, end)
  } else {
    setDatesInputReverse(start, end)
  }
}

export function setDatesInput(start, end) {
  setInputDates(start, end)
  $.setStartDate(Lib.dateToInt(start))
  $.setEndDate(Lib.dateToInt(end))
}

export function setDatesInputReverse(start, end) {
  setInputDates(end, start)
  $.setStartDate(Lib.dateToInt(end))
  $.setEndDate(Lib.dateToInt(start))
}

export function setInputDates(start, end) {
  let s = Lib.formatArray(start, ",", " ")
  let e = Lib.formatArray(end, ",", " ")
  let dates = `${s}, ${e}`
  $.setInputs(dates)
}

export function setDaysNormal() {
  let days = $.getEndDate(0) - $.getStartDate(0)
  $.setDaysInDay(days)
}

export function setMonthsNormal() {
  let days = Lib.daysInMonthsCounter($.getStartDate(1), $.getEndDate(1))
  $.setDaysInMonth(days)
}

export function setYearsNormal() {
  let years = ($.getEndDate(2) - $.getStartDate(2))
  let days = years * C.ONE_YEAR
  $.setDaysInYear(days)
}


