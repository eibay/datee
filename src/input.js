import * as C from './constants'

let
  DAYS_DIFFERENCE = [0, 0, 0, 0, 0],
  TOTAL = 0,
  LEAP_YEARS = [],
  INPUT_DATES = (""),
  START_DATE = [],
  END_DATE = [],
  IS_YEAR_VALID = false,
  IS_MONTH_VALID = false,
  IS_DAY_VALID = false 

export function getInput(input) {
  reset()
  let a = getDates(input)
  let b = splitDates(a)
  compareDates(b[0], b[1])
}

function getDates(input) {
  let dates = (input.split(", "))
  return(dates)
}

function splitDates(dates) {
  let start = (dates[0].trim().split(" "))
  let end = (dates[1].split(" "))
  return([start, end])
}

export function compareDates(start, end) {
  if (isBetween(start, end)) {
    // setYearValid(true)
    setInputDate(start, end)
  } else {
    // setYearValid(false)
  }
}

export function isBetween(start, end) {
  return ((C.MAX_YEAR >= start[2] && start[2] >= C.MIN_YEAR))
    && ((C.MAX_YEAR >= end[2] && end[2] >= C.MIN_YEAR))
    ? true : false
}

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
  START_DATE = dateToInt(start)
  END_DATE = dateToInt(end)
}

export function setDatesInputReverse(start, end) {
  setInputDates(end, start)
  START_DATE = dateToInt(end)
  END_DATE = dateToInt(start)
}

export function setInputDates(start, end) {
  let s = formatInput(start)
  let e = formatInput(end)
  INPUT_DATES = (`${s}, ${e}`)
}

export function dateToInt(date) {
  let numDate = date.map(Number)
  return numDate
}

export function formatInput(input) {
  return (input.join().replace(/,/g, ' '))
}

export function getInputDates() {
  return INPUT_DATES
}

export function verifyInput() {

}

export function getOutput() {
  return ("01 03 2001, 01 03 2003")
}

// Setup And Other Functions Library
function reset() {
  TOTAL = 0,
  LEAP_YEARS = [],
  INPUT_DATES = (""),
  START_DATE = [],
  END_DATE = [],
  IS_YEAR_VALID = false,
  IS_MONTH_VALID = false,
  IS_DAY_VALID = false
}