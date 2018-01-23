import * as $ from "./variables"
import * as P from "./process"
import { countLeapYear } from "./leapyear"
import * as Lib from "./lib";

export function getOutput() {
  countLeapYear()
  countDays()
  getTotalDays()
  return formatOutput()  
}

export function countDays() {
  $.isDayGreater ? P.setDaysNormal() : getDaysInMonths()
  // $.isDayGreater() ? $.setDaysNormal() : $.getDaysInMonths()
  // $.isMonthGreater() ? $.setMonthsNormal() : $.getDaysInYears()
  // $.isYearGreater() ? $.setYearsNormal() : null 
}

export function getDaysInMonths() {
  let days = Lib.daysInDaysCounter()
  $.setDaysInDay(days)
  $.incrementStartDate(1)
}

export function getTotalDays() {
  let days = $.getDaysDifference()
  let total = days.reduce((total, day) => total + day)
  $.setTotal(total)
}

export function formatOutput() {
  return (`${$.getInputs()}, ${$.getTotal()}`)
}