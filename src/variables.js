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

export function reset() {
  TOTAL = 0,
    LEAP_YEARS = [],
    INPUT_DATES = (""),
    START_DATE = [],
    END_DATE = [],
    IS_YEAR_VALID = false,
    IS_MONTH_VALID = false,
    IS_DAY_VALID = false
}

export function getDaysArray() {
  return DAYS_DIFFERENCE
}

export function setDaysInDay(day) {
  DAYS_DIFFERENCE[0] = day
}

export function setDaysInMonth(day) {
  DAYS_DIFFERENCE[1] = day
}

export function setDaysInYear(day) {
  DAYS_DIFFERENCE[2] = day
}

export function setDaysInYearExtra(day) {
  DAYS_DIFFERENCE[3] = day
}

export function setDaysLeapYear(day) {
  DAYS_DIFFERENCE[4] = day
}

export function getStartDate(place) {
  return START_DATE[place]
}

export function setStartDate(date) {
  START_DATE = date
}

export function getEndDate(place) {
  return END_DATE[place]
}

export function setEndDate(date) {
  END_DATE = date
}

export function setInputs(dates) {
  INPUT_DATES = dates
}

export function getInputs() {
  return INPUT_DATES
}

export function setIsYearValid(status) {
  IS_YEAR_VALID = status
}

export function getIsYearValid() {
  return IS_YEAR_VALID
}

export function getLeapYear() {
  return DAYS_DIFFERENCE[4]
}

export function setLeapYear(days) {
  DAYS_DIFFERENCE[4] = days
}

export function setLeapYears(year) {
  LEAP_YEARS.push(year)
}

export function getLeapYears() {
  return LEAP_YEARS
}

export function isYearEqual() {
  return (END_DATE[2] == START_DATE[2]) ? true : false
}

export function isMonthEqual() {
  return (END_DATE[1] == START_DATE[1]) ? true : false
}

export function isYearGreater() {
  return (END_DATE[2] > START_DATE[2]) ? true : false
}

export function isMonthGreater() {
  return (END_DATE[1] >= START_DATE[1]) ? true : false
}

export function isDayGreater() {
  return (END_DATE[0] >= START_DATE[0]) ? true : false
}

export function setYearsNormal() {
  let years = (END_DATE[2] - START_DATE[2])
  let days = years * ONE_YEAR
  setDaysInYear(days)
}

export function setMonthsNormal() {
  let days = (daysInMonthsCounter(START_DATE[1], END_DATE[1]))
  setDaysInMonth(days)
}

export function setDaysNormal() {
  let days = (END_DATE[0] - START_DATE[0])
  setDaysInDay(days)
}
