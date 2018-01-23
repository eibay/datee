import { getInput } from './input'
import { getOutput } from './output'

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./src/dates.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`----------------------------------------`)
  getInput(line)
  console.log(" Input> ", line)
  console.log("Output> ", getOutput())
});