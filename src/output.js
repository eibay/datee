import * as $ from "./variables"
import * as P from "./process"
import { countLeapYear } from "./leapyear"
import * as Lib from "./lib";
import * as C from "./constants"

export function getOutput() {
  countLeapYear()
  countDays()
  getTotalDays()
  return formatOutput()  
}

export function countDays() {
  $.isDayGreater ? P.setDaysNormal() : getDaysInMonths()
  $.isMonthGreater() ? P.setMonthsNormal() : getDaysInYears()
  $.isYearGreater() ? P.setYearsNormal() : null 

}

export function getDaysInMonths() {
  let days = Lib.daysInDaysCounter()
  $.setDaysInDay(days)
  $.incrementStartDate(1)
}

export function getDaysInYears() {
  let startMonthDays = Lib.daysInMonthsCounter($.getStartDate(1), C.MONTH_MAP.length)
  let endMonthDays = Lib.daysInMonthsCounter(C.FIRST_MONTH_INDEX, $.getEndDate(1))
  let days = startMonthDays + endMonthDays
  $.setDaysInYearExtra(days)
  $.decrementEndDate(2)
} 


export function getTotalDays() {
  let days = $.getDaysDifference()
  let total = days.reduce((total, day) => total + day)
  $.setTotal(total)
}

export function formatOutput() {
  return (`${$.getInputs()}, ${$.getTotal()}`)
}