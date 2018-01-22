import * as C from './constants'
import * as V from './validate'
import * as S from './set'
import * as $ from './variables'

export function getInput(input) {
  $.reset()
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

export function verifyInput() {

}

export function getOutput() {
  return ("01 03 2001, 01 03 2003")
}
