import * as I from './input'
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
  I.START_DATE = dateToInt(start)
  I.END_DATE = dateToInt(end)
}

export function setDatesInputReverse(start, end) {
  setInputDates(end, start)
  I.START_DATE = dateToInt(end)
  I.END_DATE = dateToInt(start)
}

export function setInputDates(start, end) {
  let s = formatArray(start, ",", " ")
  let e = formatArray(end, ",", " ")
  let dates = `${s}, ${e}`
  I.setInputs(dates)
}

// export function formatArray(array) {
//   // return (array.join().replace(/a/g, b))
//   return (array.join().replace(/,/g, ' '))
// }