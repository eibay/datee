export function formatArray(input) {
  // return (input.join().replace(/a/g, b))
  return (input.join().replace(/,/g, ' '))
  
}

export function dateToInt(date) {
  let numDate = date.map(Number)
  return numDate
}