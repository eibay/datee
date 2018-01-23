import * as C from "./constants"
export function displayMessage(status) {
  switch (status) {
    case 'Error1':
      return (`Error 1: Input out of range. ${C.MIN_YEAR} - ${C.MAX_YEAR}`)
      break
    case 'Error2':
      return (`Error 2: Day can't be zero`)
      break
    case 'Error3':
      return (`Error 3: Month can't be zero`)
      break
    case 'Error4':
      return (`Error 4: Year can't be zero`)
      break
    default:
      return "Error: Please check your input."

  }
}
