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

export function setDaysDay(day) {
  DAYS_DIFFERENCE[0] = day
}

export function setDaysMonth(day) {
  DAYS_DIFFERENCE[1] = day
}

export function setDaysYear(day) {
  DAYS_DIFFERENCE[2] = day
}

export function setDaysYearExtra(day) {
  DAYS_DIFFERENCE[3] = day
}

export function setDaysLeapYear(day) {
  DAYS_DIFFERENCE[4] = day
}

export function getStartDate() {
  return START_DATE
}

export function setStartDate(date) {
  START_DATE = date
}

export function getEndDate() {
  return END_DATE
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