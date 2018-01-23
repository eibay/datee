import * as C from './constants'
import * as V from './validate'
import * as P from './process'
import * as $ from './variables'
import { isBetween } from './lib'
import { validateInput } from "./validate";

export function getInput(input) {
  $.reset()
  let a = getDates(input)
  let b = splitDates(a)
  compareDates(b[0], b[1])
  validateInput()

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
    $.setIsYearValid(true)
    P.setInputDate(start, end)
  } else {
    $.setIsYearValid(false)
  }
}




