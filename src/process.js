import * as I from './input'
import * as $ from './variables'
import { formatArray, dateToInt } from './lib';

export function setInputDate(start, end) {
  if (end[2] > start[2]) {
    setDatesInput(start, end)
  } else if (end[2] == start[2]) {
    // isMonthValid(start, end)
  } else {
    setDatesInputReverse(start, end)
  }
}

export function setDatesInput(start, end) {
  setInputDates(start, end)
  $.setStartDate(dateToInt(start))
  $.setEndDate(dateToInt(end))
}

export function setDatesInputReverse(start, end) {
  setInputDates(end, start)
  $.setStartDate(dateToInt(end))
  $.setEndDate(dateToInt(start))
}

export function setInputDates(start, end) {
  let s = formatArray(start, ",", " ")
  let e = formatArray(end, ",", " ")
  let dates = `${s}, ${e}`
  $.setInputs(dates)
}