import * as C from './constants'
import * as V from './validate'
import * as S from './set'


export let 
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
  if (V.isBetween(start, end)) {
    // setYearValid(true)
    S.setInputDate(start, end)
  } else {
    // setYearValid(false)
  }
}

export function setInputs(dates) {
  INPUT_DATES = dates
}









// export function formatInput(input) {
//   return (input.join().replace(/,/g, ' '))
// }

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