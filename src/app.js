import Readline from 'readline'
import { getInput } from './input'
import { getOutput } from "./output"
import { validateInput } from "./validate";

let messagePrompt = "Enter date as: 15 04 1969, 12 09 1945\n"

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: messagePrompt
})

rl.prompt()

rl.on('line', (line) => {
  console.log(`Input> ${line}`)
  getInput(line)
  if (validateInput()) {
    console.log(`Output> ${getOutput()}\n`)
    rl.prompt()
  } else {
    console.log(`Error 1: Input Date Is Out Of Range (${MIN_YEAR} - ${MAX_YEAR})\n`)
    rl.prompt()
  }
})
  .on('close', () => {
    console.log(`\nExiting now, have a great day!\n`)
    process.exit(0)
  })
